function deepCount(a) {
  let count = 0
  function deep1(b) {
    for (let i = 0; i < b.length; i++) {
      count++
      if (typeof b[i] === 'object') {
        deep1(b[i])
      }
    }
    return count
  }
  return deep1(a)
}

console.log(deepCount([[[23, 21, [[17, 20, [[]]]]]], 5, 0]))
console.log(deepCount([[[23, 21, [[17, 20, [[]]]]]], 5, 0]))
console.log(deepCount([1, 2, 3]))
console.log(deepCount(['x', 'y', ['z']]))
console.log(deepCount([1, 2, [3, 4, [5]]]))
