module.exports.single = (n) => {
  if (isFizz(n) && isBuzz(n)) { return 'FizzBuzz' }
  if (isFizz(n)) { return 'Fizz' }
  if (isBuzz(n)) { return 'Buzz' }
  return n.toString()
}

const isFizz = (n) => n % 3 === 0
const isBuzz = (n) => n % 5 === 0

module.exports.string = (numbers) => {
  return numbers
    .split(',')
    .map((n) => n.toString())
    .join(',')
}
