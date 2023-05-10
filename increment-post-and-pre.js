var x = 1;
var y = 1;

x = x + 1;
y = y + 1;

console.log(x, y);

x += 1;
y += 1;

console.log(x, y);

x++;
++y;

console.log(x, y); // 4 4

var z = 10;

var resultX = z + x++; //x used at non-incremented vaoue 4
var resultY = z + ++y; // y is incremented first then used in expression at incremented value

console.log(resultX, resultY); // 14, 15

console.log(x, y); // both 5 (stored at incremented value)

// compound assignment operators
// plus is overloaded for strings and numbers

var a = 1;
a += 1;
a += 2;
// a is 4

var s = "";
s += "I ";
s += "love ";
s += "JS. ";
console.log(s);
