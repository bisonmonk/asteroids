(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx){
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new Asteroids.Ship([450, 225],[0,0]);
    this.bullets = [];
    this.bindKeyHandlers();
  }

  Game.DIM_X = 900;
  Game.DIM_Y = 450;
  Game.INTERVAL_ID;

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i =0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
  }

  Game.prototype.fireBullet = function() {
    this.bullets.push(this.ship.fireBullet());
  }
  
  Game.prototype.repositionLostShip = function() {
    if (this.ship.isOutOfBounds()) {
      var posX = this.ship.pos[0];
      var posY = this.ship.pos[1];
      
      if (posX < 0 || posX > 900) {
        this.ship.pos[0] = Math.abs(this.ship.pos[0] - 900);
        //this.asteroids[i].pos[1] = Math.abs(this.asteroids[i].pos[1] - 450); 
      }
      if (posY < 0 || posY > 450) {
        this.ship.pos[1] = Math.abs(this.ship.pos[1] - 450);
        //this.asteroids[i].pos[0] = Math.abs(this.asteroids[i].pos[0] - 900); 
      }
    }
  }

  Game.prototype.repositionLostAsteroids = function() {
    var that = this;
    for (var i = this.asteroids.length-1; i >= 0; i--) {
      if (this.asteroids[i].isOutOfBounds()) {
        var posX = this.asteroids[i].pos[0];
        var posY = this.asteroids[i].pos[1];
        
        if (posX < 0 || posX > 900) {
          this.asteroids[i].pos[0] = Math.abs(this.asteroids[i].pos[0] - 900);
          //this.asteroids[i].pos[1] = Math.abs(this.asteroids[i].pos[1] - 450); 
        }
        if (posY < 0 || posY > 450) {
          this.asteroids[i].pos[1] = Math.abs(this.asteroids[i].pos[1] - 450);
          //this.asteroids[i].pos[0] = Math.abs(this.asteroids[i].pos[0] - 900); 
        }
      }
    }
  }

  Game.prototype.removeAsteroid = function(idx) {
    this.asteroids.splice(idx, 1);
  }

  Game.prototype.removeBullet = function(idx) {
    this.bullets.splice(idx, 1);
  }


  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
    this.bullets.forEach(function(bullet) {
      bullet.draw(that.ctx);
    });
    console.log("drawing");
    this.ship.draw(that.ctx);
  }

  Game.prototype.move = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
    this.bullets.forEach(function(bullet) {
      bullet.move();
    });
    this.ship.move();
  }

  Game.prototype.bindKeyHandlers = function() {
    var that = this;

    key('w', function() { that.ship.power(-2); });
    key('s', function() { that.ship.power(2); });

    key('a', function() { that.ship.turn(1); });
    key('d', function() { that.ship.turn(-1); });

    key('space', function() { that.fireBullet(); } );
  }

  Game.prototype.checkCollisions = function() {

    for (var i = this.asteroids.length - 1; i >= 0; i--) {
      if (this.asteroids[i].isCollidedWith(this.ship)) {
        //Change to ALERT()
        console.log("BAM!");
        this.stop();
      }

      for (var j = this.bullets.length -1; j >= 0; j--) {
        if (this.bullets[j].isCollidedWith(this.asteroids[i])) {
          this.removeAsteroid(i);
          this.removeBullet(j);
          this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
        }
      }
    }
  }

  Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
    this.repositionLostAsteroids();
    this.repositionLostShip();
    this.draw();
  }

  Game.prototype.start = function(numAsteroids) {
    var game = this;
    //game.bindKeyHandlers();
    game.addAsteroids(numAsteroids);
    Game.INTERVAL_ID = setInterval(function() {
      game.step();
    }, 30);
  }

  Game.prototype.stop = function() {
    clearInterval(Game.INTERVAL_ID);
  }
})(this);