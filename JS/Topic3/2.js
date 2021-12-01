function myNew(Constructor, ...args) {
  return new Constructor(...args)
}

var john = myNew(Person, 'John', 30) // should work the same as:
var john = new Person('John', 30)

//Note: use the code below for your task:
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.introduce = function () {
  return 'My name is ' + this.name + ' and I am ' + this.age
}

console.log(john.introduce()) //My name is John and I am 30
