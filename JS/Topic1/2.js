function singleNumber(arr) {
  if (arr.length >= 3) {
    arr.sort()
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
  }
}

singleNumber([1, 1, 2])
singleNumber([17, 17, 3, 17, 17, 17, 17])
