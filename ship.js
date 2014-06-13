(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (pos, vel, radius, color) {
    Asteroids.MovingObject.call(this, pos, vel);
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.borderColor = Ship.BORDER_COLOR;
    this.borderWidth = Ship.BORDER_WIDTH;
    this.angle = Ship.INITIAL_ANGLE;
    this.coords = Ship.COORDS;
    this.height = Ship.HEIGHT;
  };
  
  Ship.INITIAL_ANGLE = 0;
  Ship.RADIUS = 20;
  Ship.COLOR = 'rgba(0,0,0,0)';
  Ship.BORDER_COLOR = "#26ff00";
  Ship.BORDER_WIDTH = 0;
  
  Ship.RADIANS = -Math.PI / 180;

  Ship.inherits(Asteroids.MovingObject);
  
  Ship.prototype.draw = function(ctx) {
    var height = this.radius * (Math.sqrt(3)/2);
    
    ctx.save();
    
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderWidth;
    
    //ctx.save();
        
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(-this.angle * Ship.RADIANS);
    
    ctx.beginPath();
    
    ctx.moveTo(0, -height/2);
    ctx.lineTo(-this.radius/2, height/2);
    ctx.lineTo(this.radius/2, height/2);
    ctx.lineTo(0, -height/2);
    
    ctx.stroke();
    ctx.fill();
    
    ctx.closePath();
    //ctx.save();
    ctx.restore();
    
    // var width = 20;
    // var corners = 3;
    // var origin_x = this.pos[0];
    // var origin_y = this.pos[1];
    // var points = [];
    // var offset = corners / 2 * 1.5; 
    // 
    // offset += this.angle * Math.PI / 180;
    // //d = (d)? true : false;  
    // ctx.beginPath();
    // 
    // for (var i = 0; i < corners; i++) {
    //   var x = origin_x + Math.cos((Math.PI * 2 / corners) * (i + (offset + this.angle))) * this.radius;
    //   var y = origin_y + Math.sin((Math.PI * 2 / corners) * (i + (offset + this.angle))) * this.radius;
    //   
    //   if (i === 0) {
    //     ctx.moveTo(x, y);
    //   } else {
    //     ctx.lineTo(x, y);
    //   }
    //   points.push([x, y]);
    // }
    // 
    // ctx.lineTo(points[0][0], points[0][1]);
    // ctx.stroke();
    // ctx.closePath();
    
    // var height = this.radius * (Math.sqrt(3)/2);
    // 
    // ctx.save();
    // 
    // ctx.translate(this.pos[0], this.pos[1]);
    // 
    // //console.log(a);
    // 
    // //console.log(ctx.translate(this.pos[0], this.pos[1]));
    // 
    // console.log(this.pos);
    // 
    // //ctx.rotate(this.angle);
    // 
    // ctx.beginPath();
    // 
    // //ctx.arc(this.pos[0], this.pos[1], 2, 0, 2 * Math.PI);
    // 
    // ctx.moveTo(0, -this.height/2);
    // 
    // var that = this;
    // this.coords.forEach(function(coord) {
    //   coord[0] = that.pos[0] + (coord[0] - that.pos[0]) * Math.cos(that.angle) + (coord[1] - that.pos[1]) * Math.sin(that.angle);
    //   coord[1] = that.pos[1] + (coord[1] - that.pos[1]) * Math.cos(that.angle) + (coord[0] - that.pos[0]) * Math.sin(that.angle);
    //   ctx.lineTo(coord[0], coord[1]);
    // });
    
    // ctx.lineTo(-this.radius/2, height/2);
    // ctx.lineTo(this.radius/2, height/2);
    // ctx.lineTo(0, -height/2);
    
    // ctx.lineTo(-this.radius/2, height/2);
    // ctx.lineTo(this.radius/2, height/2);
    // ctx.lineTo(0, -height/2);
    
    
    // ctx.rotate(this.angle);
    // for (var i = 0; i < 3; i++) {
    //   ctx.lineTo(this.radius * Math.cos(this.angle * i), 
    //              this.radius * Math.sin(this.angle * i));
    // }
    
     // ctx.stroke();
    // ctx.fill();
    // ctx.closePath();
    // ctx.restore();
  }
  
  Ship.prototype.turn = function(sign) {
    this.angle -= sign * 15;
    
    // this.angle += sign * 8;// ((Math.PI / 80));
    // console.log("angle");
    // console.log(this.angle);
    // if (this.angle >= 180) {
    //   this.angle -= 180;
    // } else if (this.angle <= 180) {
    //   this.angle += 180;
    // }
  }
 
  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse * Math.sin(this.angle * Ship.RADIANS);
    this.vel[1] += impulse * Math.cos(this.angle * Ship.RADIANS);
  }

  Ship.prototype.fireBullet = function() {
    // var velX = 2;//this.vel[0];
    // var velY = 2;//this.vel[1];
      
    var bulVelX = -Math.sin(this.angle * Ship.RADIANS) * 10;
    var bulVelY = -Math.cos(this.angle * Ship.RADIANS) * 10;

    // var bulVelX = velX * 3;
    // var bulVelY = velY * 3;

    return new Asteroids.Bullet([this.pos[0], this.pos[1]], [bulVelX, bulVelY]);
  }

})(this);

