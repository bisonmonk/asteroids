Function.prototype.inherits = function(SuperClass) {
  var SubClass = this;
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  SubClass.prototype = new Surrogate();
}


function MovingObject(speed, size) {
  this.speed = speed;
  this.size = size;
};

function Ship (speed, size, color) {
  MovingObject.call(this, speed, size);
  this.color = color;
};

Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

s = new Ship(20, 100, "blue");