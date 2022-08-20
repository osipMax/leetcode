// SUMMARY: we can delete elements of given array instead of creating a new one to solve the problem
// Use for(...) if you need to conditionally quit the cycle
// forEach(...) wouldn`t quit the cycle conditionally

function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false;
  }

  return subset.every(element => {
    const index = source.indexOf(element);

    index !== -1 && delete source[index];

    return index !== -1
  })

  for(let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);

    if (index === -1) {
      return false;
    }

    delete source[index];
  }

  return true;

  // const checkedIndexes = []

  // const res = subset.map(element => {
  //   const sourceIndex = source.indexOf(element)

  //   if (sourceIndex === -1 || checkedIndexes.includes(sourceIndex)) {
  //     return false;
  //   }

  //   checkedIndexes.push(sourceIndex);

  //   return true;
  // });

  // if (res.includes(false)) {
  //   return false;
  // }

  // return true;
}

const res = arraySubset([1, 2, 2, 4], [1, 2, 2, 5])

console.log(res)
