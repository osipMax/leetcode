function flatten(arr) {
  const res = [];

  arr.forEach(i => i.length ? res.push(...flatten(i)) : res.push(i))

  return res
}

const res = flatten([1, 2, [3, [1, 1, 1, [1]], 4, [5, 6]]])
console.log(res)