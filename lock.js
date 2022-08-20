function useCounter() {
  let value = 0;

  function increment() {
    this.value += 1;
  }

  function decrement() {
    this.value--;
  }

  return {
    increment,
    decrement,
    value
  }
}

const value = 5;

const counter = useCounter();

counter.increment();
console.log(counter.value)
