function intersection(arr1, arr2) {
  return arr1.filter(i => arr2.includes(i))
}

const res = intersection([1, 2, 3, 4], [3, 4, 5, 6])
console.log(res)