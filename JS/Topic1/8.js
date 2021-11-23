let number
let count = false
while (count === false) {
  number = prompt('enter a number over 100')
  if (number > 100 || number === '' || number === null) {
    count = true
  }
}
