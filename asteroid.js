(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel, radius) {
    Asteroids.MovingObject.call(this, pos, vel);
    // this.pos = pos;
    // this.vel = vel;
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
  };

  Asteroid.COLOR = "black";

  Asteroid.RADIUS = 30;

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY){
    var startX = (Math.random() * dimX);
    var startY = (Math.random() * dimY);

    var startPos = [startX, startY];
    var startVel = randomVec();

    return new Asteroid(startPos, startVel);
  }

  var randomVec = function () {
    var velX = (4 * Math.random() - 2);
    var velY = (4 * Math.random() - 2);

    return [velX, velY];
  }

})(this);