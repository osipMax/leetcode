function isUnique(str) {
  return new Set(str).size === str.length;
}

const res = isUnique('abcABCDEfgh')
console.log(res)
