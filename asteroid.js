(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
    MovingObject.call(this, pos, vel);
    this.COLOR = color;
    this.RADIUS = radius;
  };

  Asteroid.inherits(MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY){
    var startX = (Math.random() * dimX);
    var startY = (Math.random() * dimY);

    var startPos = [startX, startY];
    var startVel = randomVec();

    return (new Asteroid(startPos, startVel, 30, "gray"));
  }

  var randomVec = function () {
    var velX = (4 * Math.random() - 2);
    var vely = (4 * Math.random() - 2);

    return [velX, velY];
  }

})(this);