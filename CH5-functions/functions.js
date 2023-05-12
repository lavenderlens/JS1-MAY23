/**
 * functions - execute one or more lines of code at once
 * they have:
 * input
 * output
 * OR both
 * OR neither
 * very similar in other languages
 * JS diffs:
 * JS can pass functions as data
 * JS can return another function as data
 */

// console.log("Hello");
// console.log("World");
// console.log("How are you today?");

// ESSENTIAL FUNCTIONS
// 1. function declaration
// function declarations are loaded into memory at the start
// no input, no output
function greet1() {
  console.log("Hello");
  console.log("World");
  console.log("How are you today?");
}
greet1();
// no output, as there is no return statement
// as we have only print statements we may not persist the result of the function
var myGreet1 = greet1();
console.log(myGreet1); // undefined
console.log(greet1()); // nothing

// 2. input, no output
function greet2(name) {
  console.log("Hello");
  console.log(name);
  console.log("How are you today?");
}
greet2("Alan");

// 3. input and output
/**
 * return statements must be the last in block
 * having said that, there may be multiple return statements in a single app
 * each representing one path through the app
 * return statements can return only one value
 * but that value may be a complex structure itself eg an object
 *
 */
function greet3(name) {
  return `
Hello
${name} 
How are you today?`;
}
console.log(greet3("Ryan"));
var iestyn = greet3("Iestyn");
console.log(iestyn);

// 4. output, no input
function greet4() {
  return `
  Hello
  World 
  How are you today?`;
}

greet4(); //need to pass result on
console.log(greet4());

// EXTRA FUNCTIONS
// 5. anonymous function expression
// function expressions are loaded into memory where they occur
// they may be used to assign functions to the prototype (see Objects chapter)
// they may be refactored and simplified into arrow functions

const noName = function () {
  return "A girl has no name";
};
console.log(noName());

// 6. ARROW FUNCTIONS - an abbreviated form of anonymous function expression
// stage 1 - take an anon func expression
const noName1 = function () {
  return "A girl has no name";
};
// stage 2 - remove function keyword, add arrow after parens
const noName2 = () => {
  return "A girl has no name";
};
// stage 3 - remove return statement and braces IF there is only one statement in body
const noName3 = () => "A girl has no name";
// stage 4 - optionally, remove param brackets IF there is only one param
const noName4 = (name) => "A girl has the name " + name;
