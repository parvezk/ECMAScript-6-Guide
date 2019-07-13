
// 3.1 let, const and block scoping *******************************
"use strict";

let set = Array.from(Array(N), (x, index) => {
  return 0;
});

for (const [index, value] of set.entries()) {
  if (value) {
    if (isNextMoveValid(value, index)) movables.push(value);
  }
}

for (const [index, value] of posUpdates.entries()) {
  const x = Object.keys(value)[0];
  if (x == movableItem) {
    value[movableItem] += index;
  }
}

for (const [index, value] of Array.from(posUpdates.entries())) {
  a = Object.values(value)[0] / M;
  positions.push(a);
}

let productId = 12;
{
  let productId = 2000;
}
console.log(productId);

{
  let productId2 = 2000;
}
console.log(productId2);

function updateProductId() {
  productId = 12;
}

let productId = null;
updateProductId();
console.log(productId);

let productId = 42;
for (let productId = 0; productId < 10; productId++) {}

let updateFunctions = [];
for (let i = 0; i <= 2; i++) {
  updateFunctions.push(function() {
    return i;
  });
}
//console.log(updateFunctions[2]());

const MARCKUP_PCT = 100;
if (MARCKUP_PCT > 0) {
  const MARCKUP_PCT = 10;
}
//console.log(MARCKUP_PCT);

// 3.2 Arrow Function *******************************
'use strict';

var getPrice = () => 5.99;
//console.log(typeof getPrice, getPrice());

var getPrice2 = count => count * 4.00;
//console.log(getPrice2(2));

var getPrice3 = (count, tax) => count * 4.00 * (1 + tax);
//console.log(getPrice3(2, .07));

var getPrice4 = (count, tax) => {
    let price = count * Math.random();
    price *= (1 + tax);
    return price;
}
//console.log(getPrice4(2, 0.07));

//window
document.addEventListener('click', () => console.log(this));

// method arrow function
var invoice = {
    number: 123,
    process: function(){
        return () => console.log(this.number);
    }
};
invoice.process()();
// this -> context in which func is running

var newInvoice = {
    number: 456
}

invoice.process().bind(newInvoice)();
invoice.process().call(newInvoice);
// call/bind useless, cannot change value of this

var getPrice5 = () => 5.99;
//console.log(getPrice5.hasOwnProperty('prototype'), getPrice5.prototype.constructor)

/* example 1 */

let square = x => x * x;
let add = (a, b) => a + b;
let fun = (a, b) => { return a + b; };
let pi = () => 3.1415;

console.log(square(5));
console.log(add(3, 4));
console.log(pi());

/* example 2 */

;(function(){
    var f = (a, b) => { let c = [a, b];
        return c; };
    console.log(f(1, 2));
}.call({'a':1}));

;(function(){
    var f = () => this;
    console.log(f());
}.call({'a':1}));

;(function(){
    var f = (a) => a;
    console.log(f(1))
}.call({'a':1}));

;(function(){

    var f = (a, b) => [a, b];
    console.log(f(1, 2));
}.call({'a':1}));

/* example 3 - lexical this - Invoked through call or apply */

var adder = {
    base : 5,

    add : function(a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function(a) {
        var f = v => {
            // here this is adder
            return v + this.base;
        };
        var b = {
            base : 2
        };

        return f.call(b, a);
    }
};

console.log(adder.add(1));         // This would log to 2
console.log(adder.addThruCall(1)); // This would log to 2 still

/* example 4 - lexical arguments  */
//Arrow functions do not expose an arguments object

var arguments = 42;
var arr = () => arguments;

arr(); // 42

function foo() {
    var f = (i) => arguments[0]+i; // foo's implicit arguments binding
    return f(2);
}

foo(1); // 3

// rest parameters are good alternatives to arguments

function foo() {
    var f = (...args) => args[0];
    return f(2);
}

foo(1); // 2

// 3. 5 Default Function Parameter *******************************

var getProduct = (productId = 1000) => console.log(productId);
//getProduct();

var getProduct2 = (productId = 1000, type = "software") => {
  console.log(productId, type);
};
//getProduct2(undefined, 'hardware');

var getTotal = function(price, tax = price * 0.07) {
  console.log(price, tax);
};
//getTotal(5.00);

const baseTax = 0.07;
var getTotal2 = (price, tax = price * baseTax) => {
  console.log(price, tax);
};
//getTotal2(5.00);

var generateBaseTax = () => 0.07;
var getTotal3 = (price, tax = price * generateBaseTax()) => {
  console.log(price, tax);
};
//getTotal3(5.00);

var getTotal4 = (price, tax = 0.07) => {
  console.log(arguments.length, typeof arguments[0]);
};
//getTotal4(5.00);

var getTotal5 = (price = adjustment, adjustment = 1.0) => {
  console.log(price + adjustment);
};
getTotal5();

var getTotal = (price = adjustment, adjustment = 1.0) => {
  console.log(price + adjustment);
};
getTotal(5.0);

// Rest and Spread *******************************


// Object Literal Extensions *******************************

// property value shorthand
var awe = 'some';
var foo = { awe };
var baz = { foo };
//console.log(baz.foo);

// computed property name allows expressions wrapped in square bracket
var foo = 'bar';
var baz = { [foo] : 'ponyfoo'};
console.log(baz);

function getModel (type) {
    return {
        [type]: {
            message: 'hello, this is doge',
            date: new Date()
        }
    }
}

console.log(getModel(foo))

// methods definitions

var cart = {
  _wheels : 4,
  get wheels (){
    return this._wheels;
  },
  set wheels(value){

    if(value < this._wheels){
      throw new Error('hey, come back here!')
    }
    this._wheels = value;
  }
}

console.log(cart.wheels);
cart.wheels = 2;
console.log(cart.wheels);

// Object literal method definitions

// methods definitions

var cart = {
  _wheels : 4,

  get wheels (){
      return this._wheels;
  },
  
  set wheels(value){

      if(value < this._wheels){
          throw new Error('hey, come back here!')
      }
      this._wheels = value;
  }
}

console.log(cart.wheels);
cart.wheels = 2;
console.log(cart.wheels);

// property value shorthand
var awe = 'some';
var foo = { awe };
var baz = { foo };
//console.log(baz.foo);

// computed property name allows expressions wrapped in square bracket
var foo = 'bar';
var baz = { [foo] : 'ponyfoo'};
console.log(baz);

function getModel (type) {
    return {
        [type]: {
            message: 'hello, this is doge',
            date: new Date()
        }
    }
}

console.log(getModel(foo))

// For .. of Loops *******************************

var categories = ['hardware', 'softawre', 'vaporware'];
for (var item of categories)
  console.log(item);

// Octal and binary literals *******************************

var value1 = 0o10; // Octal value
var value2 = 0O10;  // 8
var value3 = 0B10;  // 2

// Template literals

// Destructuring

// Advanced Destructuring

