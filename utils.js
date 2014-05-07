// Require in HTML before all other files.

Function.prototype.inherits = function(SuperClass) {
  var SubClass = this;
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  SubClass.prototype = new Surrogate();
}