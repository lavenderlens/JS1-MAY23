/**
 * a conditional is a program flow structure
 * that takes a single boolean value OR
 * the boolean result of a boolean expression (....)
 * which if TRUE
 * executes the code block immediately after {....}
 * // if FALSE
 * skips that block
 */

// 1. no branches
if (false) {
  console.log("code in if block executed");
}
// 2. one branch. if - else
if (false) {
  console.log("code in second if block executed");
} else {
  // anything else at all - no condition
  console.log("code in else block executed");
}
// 3. many branches - as many as you like
if (false) {
  console.log("code in third if block executed");
} else if (true) {
  console.log("code in fourth if block executed");
} else {
  console.log("code in else block executed");
}

// 4. switch statements
// interchangeable with if - elses
// suit harcoded data while if - else suits ranges of things
// they test one value for equality
// if there is a match, that "clause" gets run

let variable = 99;
switch (variable) {
  case 1:
    console.log("You chose option 1");
    break;
  case 2:
    console.log("You chose option 2");
    break;
  case 3:
    console.log("You chose option 3");
    break;
  default: //like else
    console.log("choose a valid option 1-3");
} // end switch

// use of switch without a break statement results in
// each case below the match executing inc the default
let mealDeal = 3;
switch (mealDeal) {
  case 3:
    console.log("Drink, ");
  case 2:
    console.log("Fries, ");
  case 1:
    console.log("Burger.");
  default: //like else
    console.log("Thankyou");
} // end switch
// switch without break suited to additive logic
// where you want to cut down on duplicated code in the case statements

// ternary operator (three operands)

let loggedInComponnet = "<p>Admin only</p>";
let loggedOutComponnet = "<p>Guest </p>";
let isLoggedIn = true;

let display = isLoggedIn ? loggedInComponnet : loggedOutComponnet; //exclusive OR - never are both true
console.log(display);
