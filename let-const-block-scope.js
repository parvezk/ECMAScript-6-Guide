// let, const and block scoping *******************************
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
