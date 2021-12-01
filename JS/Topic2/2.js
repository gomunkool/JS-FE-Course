function sum(...args) {
  let x = arguments
  if (arguments.length > 1) {
    let summa = 0
    for (const item of arguments) {
      summa += item
    }
    console.log(summa)
  } else {
    let summa = arguments[0]
    function sum2(b) {
      summa += b
      console.log(summa)
      return sum2
    }
    return sum2
  }
}
sum(2, 3)
sum(2)(3)
sum(1)(2)(3)(4)
