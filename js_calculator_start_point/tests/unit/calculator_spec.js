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

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(4);
    calculator.numberClick(5);
    const result = calculator.runningTotal;
    assert.equal(result, 45)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("-");
    calculator.subtract(7);
    const result = calculator.runningTotal;
    assert.equal(result, 2)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick("=");
    const result = calculator.previousTotal;
    assert.equal(result, 10)
  })



});
