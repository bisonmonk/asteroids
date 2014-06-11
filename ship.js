(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (pos, vel, radius, color) {
    Asteroids.MovingObject.call(this, pos, vel);
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.borderColor = Ship.BORDER_COLOR;
    this.borderWidth = Ship.BORDER_WIDTH;
    this.angle = 0;
    
  };

  Ship.RADIUS = 20;
  Ship.COLOR = "blue";
  Ship.BORDER_COLOR = "blue";
  Ship.BORDER_WIDTH = 0;

  Ship.inherits(Asteroids.MovingObject);
  
  Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderWidth;
    
    var height = this.radius * (Math.sqrt(3)/2);
    
    ctx.save();
    
    ctx.translate(this.pos[0], this.pos[1]);
    
    ctx.beginPath();
    
    ctx.moveTo(0, -height/2);
    ctx.lineTo(-this.radius/2, height/2);
    ctx.lineTo(this.radius/2, height/2);
    ctx.lineTo(0, -height/2);
    
    
    // ctx.rotate(this.angle);
    // for (var i = 0; i < 3; i++) {
    //   ctx.lineTo(this.radius * Math.cos(this.angle * i), 
    //              this.radius * Math.sin(this.angle * i));
    // }
    
    // ctx.closePath();

    // console.log(ctx);
    // console.log(this.radius)
    //ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
 
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

