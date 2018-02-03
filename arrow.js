// Arrow Function *******************************
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