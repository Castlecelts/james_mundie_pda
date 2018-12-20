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

  it('it should start with with a baseline of 0', function (){
    const expected = 0
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should add positive number to a running value of 0', function (){
    const expected = 2
    calculator.add(2)
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should subtract a number to a running value of 0', function (){
    const expected = -2
    calculator.subtract(2)
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should multiply a number to a running value of 0', function (){
    const expected = 0
    calculator.multiply(2)
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should divide a number to a running value of 0', function (){
    const expected = 0
    calculator.divide(2)
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should set the runningTotal to a new value if a number is clicked', function (){
    const expected = 3
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take two positive numbers together and accept an add operation', function (){
    const expected = 5
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take two numbers together and accept a subtract operation leaving negative answer', function (){
    const expected = -3
    calculator.numberClick(1)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take two numbers together and accept a multiply operation', function (){
    const expected = 6
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take two numbers together and accept a divide operation leaving a whole number', function (){
    const expected = 2
    calculator.numberClick(6)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take two numbers together and accept a divide operation leaving a float number', function (){
    const expected = 2.5
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take two numbers together and accept a divide operation leaving Not a Number', function (){
    const expected = "Not a number"
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(0)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take three numbers together and accept two operations leaving negative answer', function (){
    const expected = -2
    calculator.numberClick(1)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take one number and clear the number', function (){
    const expected = 0
    calculator.add(5)
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take one number and  one operation and clear the last operation', function (){
    const expected = 0
    calculator.numberClick(5)
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, expected );
  })

  it('it should take two number and  two operation and clear the 1st operation', function (){
    const expected = 9
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.clearClick()
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, expected );
  })

});
