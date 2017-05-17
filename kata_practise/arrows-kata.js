// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {
  
  it('are shorter to write', function() {
    var func = () => {
      console.log(this)
      return 'I am func';
    };
    assert.equal(func(), 'I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    var func = () => { return 'I return too'};
    assert.equal(func(), 'I return too');
  });

  it('one parameter can be written without parens', () => {
    var func = p => { return p + 1 };
    assert.equal(func(23), 24);
  });

  it('many params require parens', () => {
    var func = (param, param1) => { 
      return param + param1 };
    assert.equal(func(23, 42), 23+42);
  });

  it('body needs parens to return an object', () => {
    var func = () => {iAm: 'an object';};
    return func;
    assert.deepEqual(func(), {iAm: 'an object'});
  });

});