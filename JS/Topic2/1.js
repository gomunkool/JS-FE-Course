let arr = []

function runningAverage(num) {
  arr.push(num)
  return arr.reduce((sum, item) => (sum += item / arr.length), 0)
}

console.log(runningAverage(10))
console.log(runningAverage(11))
console.log(runningAverage(12))
