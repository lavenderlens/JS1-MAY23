/**
 * an object is a container for-
 * related data and functions
 * usually, functions to transform some or all of that data
 *
 * if an object had a function that didn't affect any of its data,
 * that function would be a candidate for ananother object or, sometimes,
 * a static context
 *
 * eg Car object (capital C)
 * has attributes make, model, colour, trim, year
 * functions(sometimes called methods) such as drive(), park(), refuel()
 *
 * method milesToKm(miles) doesn't need each car object to have their own copy-
 * one copy is fine for all car objects, and may be shared with objects of a different type eg people, buses
 *
 * that's said to be a static context
 */

// 1. object literal - person
const person1 = { name: "", age: 0 };

const alan = { name: "Alan lavender", age: 56 };
const bruce = { name: "Bruce Springsteen", age: 56 };
const nils = { fname: "Nils", lname: "Lofgren" };

const bandOfLiterals = [alan, bruce, nils];

for (let member of bandOfLiterals) {
  console.log(`${member.name} is ${member.age}`);
}

// Function constructors make objects with the same props (not necessarily same values)
function Musician(name, age) {
  this.name = name;
  this.age = age;
}
// const Musician = (name, age) => {
//   this.name = name;
//   this.age = age;
// };
// it's a declaration: loaded into memory at the start
// this function constructor does not work alone
// it is called by the new keyword
// new keyword is like new set of {} - a new object is formed

const alanF = new Musician("Alan", 56);
const bruceF = new Musician("Bruce", 73);
const nilsF = new Musician("Nils", 69);

console.log(alanF instanceof Musician); //true

// Musician is a user-defined type.
// we are making our own datatypes.

//what about functions?
// console.log(alanF.hello());//TypeError: alanF.hello is not a function

Musician.prototype.hello = function () {
  return `${this.name} says hello!`;
};
// an expression: loaded into memory where it occurs
// this adds a function to prototype prop of a function constructor object
// this function is available to EVERY object cretaed, past, present, and future!

console.log(alanF.hello()); //TypeError: alanF.hello is not a function

// THURSDAY NIGHT TO HERE
