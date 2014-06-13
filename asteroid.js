(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel, radius) {
    Asteroids.MovingObject.call(this, pos, vel);
    // this.pos = pos;
    // this.vel = vel;
    this.color = Asteroid.COLOR;
    this.borderColor = Asteroid.BORDER_COLOR;
    this.borderWidth = Asteroid.BORDER_WIDTH;
    
    this.radius = Asteroid.RADIUS;
  };

  Asteroid.COLOR = 'rgba(0,0,0,0)';
  
  Asteroid.BORDER_COLOR = "#26ff00";
  
  Asteroid.BORDER_WIDTH = 2;

  Asteroid.RADIUS = 30;

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY){
    //900 * 450
    
    var startX = (Math.random() * dimX);
    
    //var startY = (Math.random() * dimY);
    var startY = (dimY);
    

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