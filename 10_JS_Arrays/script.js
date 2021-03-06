// creation of arrays
var array = [10, 20, 30, 40, 50];

// Accessing an array and its properties
console.log(array);
var prop = array[0];
console.log(prop);

// Access not existed property from an array
console.log(array[5]);

// adding properties to an array
array[5] = 60;
console.log(array);
// Accessing length of an Array
console.log("The length of array is : " +array.length);

// reverse the array using reverse()
array = [10, 20, 30, 10, 50];
var output = "Before : " +array.join(' , ');
console.log(output);
document.getElementById('display').innerHTML = output;
array.reverse();
output = "After:  " + array. join(' , ');
console.log(output);
document.getElementById('display1').innerHTML = output;


// Remove the first value of the array: shift()
array = [10, 20, 30, 40, 50];
document.getElementById('display2').innerHTML = "Before : " + array.join(' , ');
    array.shift(60);
document.getElementById('display3').innerHTML = "After : "  + array.join(' , ');



// Add value to front of the array:unshift()
array = [10, 20, 30, 40, 50];
document.getElementById('display2').innerHTML = "Before : " + array.join(' , ');
array.unshift();
document.getElementById('display3').innerHTML = "After : "  + array.join(' , ');


// Remove the last value of the array: pop()
array = [10, 20, 30, 40, 50];
document.getElementById('display2').innerHTML = "Before : " + array.join(' , ');
array.pop(60);
document.getElementById('display3').innerHTML = "After : "  + array.join(' , ');


// Add value the end of the array: push()
array = [10, 20, 30, 40, 50];
document.getElementById('display2').innerHTML = "Before : " + array.join(' , ');
array.push();
document.getElementById('display3').innerHTML = "After : "  + array.join(' , ');


// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10, 20, 30, 40, 50];
document.getElementById('display2').innerHTML = "Before : " + array.join(' , ');
array.splice(1 , 2); // removes
document.getElementById('display3').innerHTML = "After : "  + array.join(' , ');

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1 = [10, 20, 30, 40, 50];
var array2 = array1;
if(array1 === array2){
    console.log("Both are equal");
}
else {
    console.log("Both aren\'t equal");
}

// Return the first element that matches the search parameter
// after the specified index position. Defaults to index position 0. Arguments: colors.indexOf(search, index):
// var result = colors.indexOf(search, index);
// console.log("The search result index is: ", result);
array = [10, 20, 30, 40, 50];
console.log(array.indexOf(100));

var n = 100;
if(array.indexOf(n) === -1){
    console.log("The Element " + n + "is not exists.");
}
else {
    console.log("The Element " + n + "is  exists at " + array.indexOf(n));
}

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: colors.join(separator):
// var arrayString = colors.join(separator);
// console.log("String from array: ", arrayString);
array = [10, 20, 30, 40, 50];
output = array.join(" , ");
console.log(output);
document. getElementById('display1').innerHTML = output;

// Prove an array is an Object
array = [10, 20, 30, 40, 50];
console.log(array);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array