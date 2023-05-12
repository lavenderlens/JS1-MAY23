// what is hoisting?

console.log(goodMorning()); //3

function goodMorning() {
  //1
  a = "Gooood "; //2
  b = "Morning!"; //2
  return a + b; //2
}

var a, b; //1
// let a, b; // hoisting only happens with the var keyword

// actual interpreter order is:
// declarations first (variables AND functions)
// expressions second
// runtime code third or subsequent passes
