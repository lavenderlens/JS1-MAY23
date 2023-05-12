/**
 * A variable is a reserved marker in memory
 * that represents values and/or expressions
 */

var width; // declaration, reserves memory for a variable in the future
// no initial value, no initial types, JS has special value for this
// - undefined
// NB Python this is NOT allowed
console.log(width);
width = 42.5; // assignment of value and a type

console.log(typeof width); // number
console.log(Boolean(width)); // true (any non-zero number)
console.log(Boolean(1)); // true (any non-zero number)
console.log(Boolean(0)); // false
console.log(!!1); // true
console.log(!!0); // false

var width; //?
console.log(width); //42.5

/**
 * var - may be declared only,
 * may be assigned,
 * may be re-assigned
 * may be re-declared (but retains its value)
 */

console.log("using let");
let height;
console.log(height); //undefined
// let height;//SyntaxError: Identifier 'height' has already been declared
height = 20.2;
height = 20.5; // re-assignment

/**
 * let - may be declared only,
 * may be assigned,
 * may be re-assigned
 * cannot be re-declared
 * does not place prop on global / window object
 */

console.log("using const");
// const depth; //SyntaxError: Missing initializer in const declaration
const depth = 500;
console.log(depth);
// depth = 600;//TypeError: Assignment to constant variable.

/**
 * const - may NOT be declared without initialising,
 * may NOT be re-assigned **or anyway, at top level...
 * cannot be re-declared
 * does not place prop on global / window object
 */

const dimensions = {
  width: 42.5,
  height: 20.5,
  depth: 500,
};
console.log(dimensions);
// dimensions = "an entirely different thing";//TypeError: Assignment to constant variable.
dimensions.depth = 600;
console.table(dimensions);
// this is possible because width, height, and depth within the object
// are references within a reference

// same for arrays, or lists
const numbers = [1, 2, 3];
numbers.push(4);
console.table(numbers);
// numbers = "an entirely different thing";//TypeError: Assignment to constant variable.
