/* global describe, it */
const assert = require('chai').assert
const fizzBuzzer = require('.')

describe('Testing', () => {
  it('should work', () => {
    assert.isTrue(true)
  })
})

describe('FizzBuzz', () => {
  it('returns "1" for 1', () => {
    const result = fizzBuzzer.single(1)
    assert.equal(result, '1')
  })
})
