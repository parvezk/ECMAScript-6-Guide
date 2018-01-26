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