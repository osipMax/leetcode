// arr = ['x', 'y', 'z'] str = 'xyyzyzyx' = ['x', 'y', 'y', 'z', 'y', 'z', 'y', 'x']
// output: 'zyx

function getShortestUniqSubstring(arr, str) {
  if (str.length < arr.length) {
    return '';
  }

  for(let i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) === -1) {
      return ''
    }
  }

  const res = '';

  const minLength = arr.length;

  let currLength = 0;
  let currRes = '';

  //  go through the str
  // while we don`t have all characters from arr we keep going (we always check Set of characters to their be uniq)
  // as we done with characters:
    // remove first character
    // remove all directly going duplicates and continue

  // continue until find again first character
  // if not found, return the least result
  // if found, remove all unecessary characters
  // compare result length with minLength

  // if we can keep going, keep going until end of the str

  for(let i = 0; i < str.length; i++) {
    const el = str[i];

    currRes += el;

    if (currRes.length && charactersInStr(currRes, arr)) {
      
    }
  }

  return res;
}

function charactersInStr(str, arr) {
  // convert str to hashSum and compare to original arr elements hashSum
  const originStr = arr.join('');

  return str.charCodeAt
}
