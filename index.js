module.exports.single = (n) => {
  if (isFizz(n)) { return 'Fizz' }
  if (n % 5 === 0) { return 'Buzz' }
  return n.toString()
}

const isFizz = (n) => n % 3 === 0
