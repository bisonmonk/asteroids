(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color, borderColor, borderWidth) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
  };

  MovingObject.prototype.move = function() {
    var posX = this.pos[0];
    var posY = this.pos[1];

    var velX = this.vel[0];
    var velY = this.vel[1];

    var newPosX = posX + velX;
    var newPosY = posY + velY;

    this.pos[0] = newPosX;
    this.pos[1] = newPosY;
  }

  MovingObject.prototype.isOutOfBounds = function() {
    return (this.pos[0] < 0 ||
        this.pos[0] > 900 ||
        this.pos[1] < 0 ||
        this.pos[1] > 450);
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderWidth;
    
    ctx.beginPath();

    // console.log(ctx);
    // console.log(this.radius)
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);

    ctx.fill();
    
    ctx.stroke();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var oPosX = otherObject.pos[0];
    var oPosY = otherObject.pos[1];

    var tPosX = this.pos[0];
    var tPosY = this.pos[1];

    var dist = Math.sqrt(Math.pow(oPosX - tPosX ,2) + Math.pow(oPosY - tPosY ,2));

    return (dist < (this.radius + otherObject.radius));
  }

})(this);
