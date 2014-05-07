(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx){
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new Asteroids.Ship([450, 225],[0,0]);
  }

  Game.DIM_X = 900;
  Game.DIM_Y = 450;
  Game.INTERVAL_ID;

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i =0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
  }

  Game.prototype.removeLostAsteroids = function() {
    var that = this;
    for (var i = this.asteroids.length-1; i >= 0; i--) {
      if (this.asteroids[i].isOutOfBounds()) {
        this.asteroids.splice(i, 1);
      }
    }
  }

  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
    this.ship.draw(that.ctx);
  }

  Game.prototype.move = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
    this.ship.move();
  }

  Game.prototype.bindKeyHandlers = function() {
    var that = this;
    //key('w', function() { root.alert('u pressed w') });

    key('w', function() { that.ship.power([0, -1]) });
    key('s', function() { that.ship.power([0,  1]) });
    key('a', function() { that.ship.power([-1, 0]) });
    key('d', function() { that.ship.power([1,  0]) });
  }

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      if (asteroid.isCollidedWith(that.ship)) {
        //Change to ALERT()
        console.log("BAM!");
        that.stop();
      }
    });
  }

  Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
    this.removeLostAsteroids();
    this.draw();
  }

  Game.prototype.start = function(numAsteroids) {
    var game = this;
    game.bindKeyHandlers();
    game.addAsteroids(numAsteroids);
    Game.INTERVAL_ID = setInterval(function() {
      // console.log("stepping")
      game.step();
    }, 30);
  }

  Game.prototype.stop = function() {
    clearInterval(Game.INTERVAL_ID);
  }
})(this);