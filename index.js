module.exports.single = (n) => {
  if (n % 3 === 0) { return 'Fizz' }
  if (n === 5) { return 'Buzz' }
  return n.toString()
}
