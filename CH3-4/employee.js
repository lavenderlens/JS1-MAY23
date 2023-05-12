var name = "Tim Smith";
var startDate = 2017;
var salary = 2409.5;
var isPermanent = true;

salary = 3510.9;

var tim =
  "Employee name: " +
  name +
  "\n started on " +
  startDate +
  "\n he earns £" +
  salary +
  ".\n Permanent status? " +
  isPermanent +
  ".";

console.log(tim);

var tim2 = `Employee: ${name} started on ${startDate} and earns £${salary} /year. Permanent status: ${isPermanent}`;
var tim3 = `
Employee: 
${name} 
started on 
${startDate} 
and earns 
£${salary} /year. 
Permanent status: 
${isPermanent}`;
console.log(tim, tim3);
