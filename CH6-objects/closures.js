function nextNumber() {
  // function declaration
  let nextNumber = 0; //the closure variable - lexically-scoped
  return function () {
    return nextNumber++;
  };
}

// function expression
const getNextNumber = nextNumber(); //the closure
console.log(getNextNumber());
console.log(getNextNumber());
console.log(getNextNumber());
const getNextNumber2 = nextNumber(); //the closure
console.log(getNextNumber2());
console.log(getNextNumber2());
console.log(getNextNumber2());
