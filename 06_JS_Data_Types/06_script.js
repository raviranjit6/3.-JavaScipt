// Add your JavaScript here
// number exam
//Variable Example
var num1 = 10;
var output = "value: " + num1 + " is datatype of : " +typeof num1;
console.log(output);
document.getElementById('display1').innerHTML = output;



// String Examples
var name = "Ravi";
output = "value: " + name + " is datatype of : " +typeof name;
console.log(output);
document.getElementById('display2').innerHTML = output;

// boolean Examples
var  isJSEasy = true;
output = "value: " + isJSEasy + " is datatype of : " +typeof isJSEasy;
console.log(output);
document.getElementById('display3').innerHTML = output;

// reassignment example of variables
var abc;
console.log(abc);  // Undefined

abc = 10;
console.log(abc);  //reassignment value defined

abc = 'Test';
console.log(abc);  // reassignment value  string

abc = true;
console.log(abc); // reassignment value Boolean

abc = null;
console.log(abc); // reassignment value  null

output = "The Output value is : " +abc;
console.log(output);
document.getElementById('display').innerHTML = output;
