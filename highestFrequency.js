function highestFrequency(arr) {
  const res = {};
  let maxLength = 0;
  let maxStr = null;


  arr.forEach(i => {
    if (res[i]) {
      res[i]++
    }
    else {
      res[i] = 1
    }

    if (res[i] > maxLength) {
      maxLength = res[i];
      maxStr = i
    }
  });

  return maxStr;
}

const res = highestFrequency(['a', 'bc', 'bc', 'bc', 'b', 'c', 'd', 'e', 'a'])
console.log(res)