var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add together two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const result = calculator.runningTotal
    assert.equal(result, 5)
  })

  it('it can substract two numbers', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const result = calculator.runningTotal
    assert.equal(result, 3)
  })

  it('it can multiply two numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const result = calculator.runningTotal
    assert.equal(result, 15)
  })

  it('it can divide two numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const result = calculator.runningTotal
    assert.equal(result, 3)
  })

});
