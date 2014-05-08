(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (pos, vel, radius, color) {
    Asteroids.MovingObject.call(this, pos, vel);
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
  };

  Ship.RADIUS = 10;
  Ship.COLOR = "blue";

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    var velX = this.vel[0];
    var velY = this.vel[1];

    var bulVelX = velX * 3;
    var bulVelY = velY * 3;

    return new Asteroids.Bullet([this.pos[0], this.pos[1]], [bulVelX, bulVelY]);
  }

})(this);

