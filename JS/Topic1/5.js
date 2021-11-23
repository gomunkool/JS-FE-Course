function tickets(peopleInLine) {
  let cashbox = []
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      cashbox.push(25)
    } else if (peopleInLine[i] === 50) {
      console.log(cashbox)
      let twentyFive = cashbox.indexOf(25)

      if (twentyFive === -1) {
        return 'NO'
      } else {
        cashbox.splice(twentyFive, 1)
        cashbox.push(50)
      }
    } else if (peopleInLine[i] === 100) {
      console.log(cashbox)
      let twentyFive = cashbox.indexOf(25)
      if (twentyFive === -1) {
        return 'NO'
      } else {
        cashbox.splice(twentyFive, 1)
        let fifty = cashbox.indexOf(50)
        if (fifty === -1) {
          let twentyFive = cashbox.indexOf(25)
          if (twentyFive === -1) {
            return 'NO'
          } else {
            cashbox.splice(twentyFive, 1)
          }
          twentyFive = cashbox.indexOf(25)
          if (twentyFive === -1) {
            return 'NO'
          } else {
            cashbox.splice(twentyFive, 1)
          }
        } else {
          cashbox.splice(fifty, 1)
        }
      }
    }
  }
  return 'YES'
}

console.log(
  tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])
)
