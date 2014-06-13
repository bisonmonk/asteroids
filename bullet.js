(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (pos, vel, radius, color) {
    // Asteroids.MovingObject.call(this, pos, vel);
    this.pos = pos;
    this.vel = vel;
    this.radius = Bullet.RADIUS;
    this.color = Bullet.COLOR;
    this.borderColor = Bullet.BORDER_COLOR;
    this.borderWidth = Bullet.BORDER_WIDTH;
    
  };

  Bullet.BORDER_COLOR = "red";
  Bullet.BORDER_WIDTH = 0;
  
  Bullet.RADIUS = 2;
  Bullet.COLOR = "red";

  Bullet.inherits(Asteroids.MovingObject);

})(this);

