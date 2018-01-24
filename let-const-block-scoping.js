
// let, const and Block scoping *******************************
'use strict';
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
