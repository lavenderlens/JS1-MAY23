var name = "Tim Smith";
var startDate = 2017;
var salary = 2409.5;
var isPermanent = true;

salary = 3510.9;

var tim =
  "Employee name: " +
  name +
  "\nstarted on " +
  startDate +
  "\nhe earns £" +
  salary +
  "\nPermanent status? " +
  isPermanent +
  ".";
console.log(tim);
const tim2 = `
Employee ${name} 
started on ${startDate} 
and earns £${salary.toFixed(2)}/year. 
Permanent status? ${isPermanent}
`;
console.log(tim2);
// using ES6 template literals
