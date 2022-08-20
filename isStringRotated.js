// console.log(isStringRotated('javascript', 'scriptjava'))

function isRotated(source, test) {
  console.log(test.split('').reverse().join(''))
  return source === test.split('').reverse().join('')
}

const res = isRotated('java', 'avajh')
console.log(res)
