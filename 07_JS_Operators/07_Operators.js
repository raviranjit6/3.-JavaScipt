// Assignment operator =
var num1 = 10;
var output = "The value of num1 is:  " +num1;
console.log(output);
document.getElementById('display').innerHTML = output;

// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
output = "The sum of a , b is: " +sum;
console.log(output);
document.getElementById('display1').innerHTML = output;

// Short hand math += , -= , *= , /=
var x = 10;
var y = 20;
var add = 0;
add = add + (a + b);
add += (a + b);  // shortcut of above method
output = " the Value is: " +add;
console.log(output);
document.getElementById('display2').innerHTML = output;

// Conditional operators < , > , <= , >= , !=
var age = 25;
if (age >= 18){
    output = "Your Major";
}
else{
    output = "Your Major";
}
console.log(output);
document.getElementById('display3').innerHTML = output;

// Unary Operator ++ , -- (pre , post)
var abc = 10;
abc = abc + 1;
abc += 1;
abc++;
output = 'The value of abc: ' +abc;
console.log(output);
document.getElementById('display4').innerHTML = output;

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    output = 'Get Marry Soon: ' +parentsAgreed;
}
else{
    output = 'Wait  ' +inRelation;
}
console.log(output);
document.getElementById('display5').innerHTML = output;



// String Concatenation Operator
var str = 2 + "5"  + 2 + "4" + 1 + 6;  // Numbers will add only before the string, then it displays without addition
console.log(str)
document.getElementById('display6').innerHTML = str + "";


// Ternary operator (? :)
age = 15;
(age >= 18) ? output = "Your Major" : output = "You are Minor";
console.log(output)
document.getElementById('display').innerHTML = output;

// Type of operator
var  xyz; // undefined
xyz = 10; // number
xyz = "Ravi"; // string
xyz = true; // Boolean
xyz = null; // null, object
output = "value : " + xyz + "data type : " +typeof xyz;
console.log(output)
document.getElementById('display').innerHTML = output;

// == operator
var a = 10;
var b = "10";
if(a == b){
    console.log( "Both are equal from ==");
}
else{
    console.log( "Both are not  equal from ==");
}

// === operator
a = 10;
b = "10";
if(a === b){
    console.log( "Both are equal from ===");
}
else{
    console.log( "Both are not  equal from ===");
}