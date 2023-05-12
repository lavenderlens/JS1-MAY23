/**
 * an array is a zero-indexed list of values
 * usually but not enforced of the same type
 * with a length property
 */

// array literal
const band = [
  "Bruce",
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
// array function constructors
const band2 = new Array(band);
const band3 = new Array(
  "Bruce",
  "Patti",
  "Stevie",
  "Nils",
  "Tom",
  "Max",
  "Gary",
  "Danny",
  "Soozie",
  "Clarence",
  "Jake"
);
const myEmptyArray = new Array(20);

for (let i = 0; i < band.length; i++) {
  console.log(band[i]);
}
for (let i = 0; i < myEmptyArray.length; i++) {
  console.log(myEmptyArray[i]);
}

// adding amd removing items

band.push("Alan");
console.log(band);
band.pop();
console.log(band);

// mutating items
band[4] = "Tom Morello";
console.log(band);

// basic array methods come in two flavours:
// mutable and immutable
// for mutable think "Save"
// for immutable think "Save As"
// immutable array methods return a copy of the whole array with changes

//Array.prototype.map() is an immutable method
// it produces a new array with a function applied to each element of the old array

const shoutyBand = band.map((el) => el.toUpperCase());
console.log(shoutyBand);
console.log(band); //original unchanged

// other ways of traversing an array
// for of loop
// no reference to index position
console.log("using for of:");
for (let member of band) {
  console.log(member);
}
// forEach loop
// passes in a function to be called back
// we run the forEach on the array's reference variable
console.log("using forEach:");
band.forEach((el) => console.log(el.toLowerCase()));

// actually has up to 3 args, can be used in any number, but order must be the same
console.log("using forEach with multiple args:");
band.forEach((el, index) => console.log(index + 1 + ": " + el.toLowerCase()));

// array length is writable (shortening truncates with data loss, lengthening adds empty elements)
// forEach loop skips empty elements
band.length = 20;
console.log("using forEach with empty elements skipped:");
band.forEach((el, index) => console.log(index + 1 + ": " + el.toLowerCase()));

// slice() and splice() show the difference between mutable and immutable methods
// slice()
const horns = band.slice(9, 11); //startIndex, endIndexExclusive
console.log(horns);
console.log(band); //original changed
// splice()
const guitarists = band.splice(0, 5); //startIndex, noOfElements
console.log(guitarists);
console.log(band); //original changed

// get index of an element
const idxGary = band.indexOf("Gary");
console.log(idxGary);
