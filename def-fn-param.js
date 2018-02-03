// Default Function Parameter *******************************

var getProduct = (productId = 1000) => console.log(productId);
//getProduct();

var getProduct2 = (productId = 1000, type = 'software') => {
    console.log(productId, type)
}
//getProduct2(undefined, 'hardware');

var getTotal = function(price, tax = price * 0.07){
    console.log(price, tax)
}
//getTotal(5.00);

const baseTax = 0.07;
var getTotal2 = (price, tax = price * baseTax) => {
    console.log(price, tax);
};
//getTotal2(5.00);

var generateBaseTax = () => 0.07;
var getTotal3 = (price, tax = price * generateBaseTax()) => {
    console.log(price, tax);
}
//getTotal3(5.00);

var getTotal4 = (price, tax = 0.07) => {
    console.log(arguments.length, typeof arguments[0]);
}
//getTotal4(5.00);

var getTotal5 = (price = adjustment, adjustment = 1.00) => {
    console.log(price + adjustment);
};
getTotal5();

var getTotal = (price = adjustment, adjustment = 1.00) => {
    console.log(price + adjustment);
}
getTotal(5.00);
