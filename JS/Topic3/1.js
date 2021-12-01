class Vector {
  constructor(arr) {
    this.arr = arr
  }
  add(arr2) {
    if (this.arr.length === arr2.arr.length) {
      let arrRes = []
      for (let i = 0; i < this.arr.length; i++) {
        arrRes.push(this.arr[i] + arr2.arr[i])
      }
      return new Vector(arrRes)
    }
    return 'error'
  }
  subtract(arr2) {
    if (this.arr.length === arr2.arr.length) {
      let arrRes = []
      for (let i = 0; i < this.arr.length; i++) {
        arrRes.push(this.arr[i] - arr2.arr[i])
      }
      return new Vector(arrRes)
    }
    return 'error'
  }
  dot(arr2) {
    if (this.arr.length === arr2.arr.length) {
      let res = 0
      for (let i = 0; i < this.arr.length; i++) {
        res += this.arr[i] * arr2.arr[i]
      }
      return res
    }
    return 'error'
  }
  norm() {
    let res = 0
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i])
      console.log(this.arr[i] ** 2)
      res += this.arr[i] ** 2
    }
    return `sqrt(${res})`
  }
  toString() {
    return `(${this.arr.join()})`
  }
}

var a = new Vector([1, 2, 3])
var b = new Vector([3, 4, 5])
var c = new Vector([5, 6, 7, 8])
// a.add(b) // should return a new Vector([4, 6, 8])
console.log(a.add(b))
// a.subtract(b) // should return a new Vector([-2, -2, -2])
console.log(a.subtract(b))
// a.dot(b) // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.dot(b))
// a.norm() // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.norm())
console.log(a.add(c))
console.log(a.toString())
