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

//...