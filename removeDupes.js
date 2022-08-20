function removeDupes(str) {
  return Array.from((new Set(str))).join('');
}

const res = removeDupes('aabbccdd')
console.log(res)
