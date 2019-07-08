
// Private ES6 methods

// apple.js

const transformName = Symbol('private:transformName');

class Apple {
  constructor () {
    console.log('i am created')
  }

  [transformName] (name) {
    return name.split('').reverse().join('');
  }

  fallOn (person) {
    return `Fell on ${this[transformName](person)}`;
  }
}

export default Apple;

// main.js
import React from 'react';
import Apple from './apple';

function Hello () {
  
  const apple = new Apple();
  const txt = apple.fallOn('notweN');

  return (
    <h1>Hello.. {txt}</h1> 
  )
}

export default Main;