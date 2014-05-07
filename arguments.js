function sum() {
  var total = 0;
  var args = [].slice.call(arguments);
  args.forEach(function(i){ total += i });
  return total;
}

// console.log(sum(1,2,3));

Function.prototype.myBind = function(obj){
  var args = [].slice.call(arguments);
  args.shift();
  var functionToBind = this;
  return function(){
    return functionToBind.apply(obj, args);
  };
}

function Cat(name) {
  this.name = name;
};


var sayName = function(x){
  console.log("hi");
  return ("Hi my name is " + this.name + x);
};

c1 = new Cat("Jerry");
c2 = new Cat("Tom");

var boundSayName = sayName.myBind(c2, "yyy");

// console.log(boundSayName());

function curriedSum(numArgs) {
  var numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length == numArgs) {
      total = 0;
      numbers.forEach(function(i) {
        total += i;
      });
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

//
// var sum1 = curriedSum(4);
// console.log(sum1(5)(30)(20)(1));




Function.prototype.curry = function(numArgs) {
  var that = this;
  var elements = [];
  function _curry(el) {
    elements.push(el);
    if (elements.length === numArgs) {
      console.log(that);
      console.log(elements);
      console.log(numArgs);
      return that.apply(that, elements);
    } else {
      return _curry;
    }
  }
  return _curry;
}


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 3); // == 27

// you'll write `Function#curry`!
var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(3); // = 27

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(3)); // == 27




// function curriedSum(howMany) {
//
// }
//
// var ourSum = curriedSum(4);
// sum(5)(30)(20)(1); // => 56