
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