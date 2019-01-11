# FizzBuzz TCR
Provoked by [this post](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864)

## Initilaization

- npm init .
- npm i -D mocha chai standard
- touch index.js and index.test.js
- package.json scripts for test, lint and pretest
- wrote a first test to check that tools works
- pbpaste > .gitignore
- git init and initial commit

## Setting up commands for TCR

    "commit": "git add -A; timestamp=$(date \"+%c\") && git commit -m \"TCR @ $timestamp\";",
    "revert": "git reset --hard",
    "tcr": "npm test && npm run commit || npm run revert"

```javascript
/* global describe, it */
const assert = require('chai').assert

describe('Testing', () => {
  it('should work', () => {
    assert.isTrue(true)
  })
})
```

## First test
Feeling before test-run: NERVOUS! Will it run?

Test:

```javascript

```