function someFn() {
  console.log(arguments);
}

Function.prototype.delay = function(delay) {
  console.log(arguments);

  return (...args) => {
    console.log(args);
    setTimeout(() => {
      this(...args);
    }, delay)
  };
}

const delayedFunc = someFn.delay(2000);

delayedFunc(1, 2, 3, 4);
