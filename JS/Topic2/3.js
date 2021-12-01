class NamedOne {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    const arr = value.split(' ')
    if (arr.length === 2) {
      this.firstName = arr[0]
      this.lastName = arr[1]
    }
  }
}
const namedOne = new NamedOne('Naomi', 'Wang')
namedOne.firstName = 'John'
namedOne.lastName = 'Doe'
console.log(namedOne)
namedOne.fullName
console.log(namedOne)
namedOne.fullName = 'Bill'
console.log(namedOne)
console.log(namedOne.fullName)
console.log(namedOne.fullName)
