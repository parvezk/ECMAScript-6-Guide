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