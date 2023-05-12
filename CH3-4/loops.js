/**
 * a loop is a block of code as is a conditional
 * but in this case the code in the block is repeated
 * either for a counter or for elements of a collection
 * or while a stop condition is not true
 * each member of the collection runs the same code, mostly
 */
const band = [
  "Patti",
  "Stevie",
  "Nils",
  "Tom",
  "Max",
  "Gary",
  "Danny",
  "Soozie",
  "Clarence",
  "Jake",
];
console.log(band.length); //10

//1. conventional for loop
for (let i = 0; i < band.length; i++) {
  console.log(band[i]);
}
//2. for of loop
// doesn't deal with index positions
for (let member of band) {
  console.log(member);
}
// TODO: which is faster / more performant
//2A. for in loop (really designed fo objects)
// works because an array is-a type of object
// concerned with keys not values
for (let index in band) {
  //   console.log(index);
  console.log(`${Number(index) + 1}: ${band[index]}`);
}

// 3. break and continue (used with conventional for as example)
console.log("using break:");
for (let i = 0; i < band.length; i++) {
  if (band[i] === "Max") {
    break;
  }
  console.log(band[i]);
}
console.log("using continue:");
for (let i = 0; i < band.length; i++) {
  if (band[i] === "Max") {
    continue;
  }
  console.log(band[i]);
}

// 4. while loop
// like a conventional for, with statements not on one line
// suits use cases where stop condition is NOT a counter
// though may be used as a counter too
let counter = 0;
while (counter < band.length) {
  console.log(band[counter]);
  counter++; //MUST increment/decrement counter inside body of the while loop
}

// 4A. do-while loop

// runs once and only the checks condition
let counter2 = 12; //will run once even though stop condition is out of range
do {
  console.log(band[counter2]);
  counter2++; //MUST increment/decrement counter inside body of the while loop
} while (counter2 < band.length);
