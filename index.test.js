/* global describe, it */
const assert = require('chai').assert
const fizzBuzzer = require('.')

describe('Testing', () => {
  it('should work', () => {
    assert.isTrue(true)
  })
})

describe('FizzBuzz single', () => {
  it('returns "1" for 1', () => {
    assert.equal(fizzBuzzer.single(1), '1')
  })

  it('returns "2" for 2', () => {
    assert.equal(fizzBuzzer.single(2), '2')
  })

  it('returns "Fizz" for 3', () => {
    assert.equal(fizzBuzzer.single(3), 'Fizz')
  })

  it('returns "Buzz" for 5', () => {
    assert.equal(fizzBuzzer.single(5), 'Buzz')
  })

  it('returns "4" for 4', () => {
    assert.equal(fizzBuzzer.single(4), '4')
  })

  it('returns "Fizz" for 6', () => {
    assert.equal(fizzBuzzer.single(6), 'Fizz')
  })

  it('returns "Buzz" for 10', () => {
    assert.equal(fizzBuzzer.single(10), 'Buzz')
  })

  it('returns "FizzBuzz" for 15', () => {
    assert.equal(fizzBuzzer.single(15), 'FizzBuzz')
  })
})
