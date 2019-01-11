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
})
