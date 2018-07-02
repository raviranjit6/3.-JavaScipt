//creation of a simple function with no args and execute a function
function greet() {
    console.log('Hello World');
}
greet();

//creation of a simple function with args
function greetArgs(name) {
    var greetMsg = 'Morning ' +name;
    console.log(greetMsg);
    document.getElementById('display').innerHTML = greetMsg;
}
greetArgs('Ravi');

// executing a function with less number of params
function greetLessArgs(name, age) {
    var greetMsg = 'Hello ' +name+ ' You are ' +age+ ' years of old : ';
    console.log(greetMsg);
    document.getElementById('display').innerHTML = greetMsg;
}
greetLessArgs('Ravi', 25);

//executing a function with more number of params
function greetMoreArgs(name, age) {
    var greetMsg = 'Hello ' +name+ ' You are ' +age+ ' years of old : ';
    console.log(greetMsg);
    document.getElementById('display').innerHTML = greetMsg;
}
greetMoreArgs('Ravi', 25, 'Ranjit'); // Extra Parameter will be ignored

//function overloading is not possible here
// There is no Function OverLoading in JavaScript


// functions with return values
function greetReturn(name) {
    var greet = 'Hello ' +name+ ' This is the Function with Return Values';
    return greet;
}
var greetingMsg = greetReturn('Cheryl');
console.log(greetingMsg);
document.getElementById('display').innerHTML = greetingMsg;

//function with empty return /no return
function greetEmptyReturn(name) {
    var greet = 'Hello ' +name+ " This is the Empty Return Function";

}
var greetMsg = greetEmptyReturn('Cheryl');
console.log(greetMsg);
document.getElementById('display').innerHTML = greetMsg;

// function Expressions with name and execution
var greetAnonymousFn = function(name) {
    var output = 'Hello ' +name+ ' This is the Function Anonymous expression';
    console.log(output);
    document.getElementById('display').innerHTML = output;
};
greetAnonymousFn('Ravi');

// Anonymous Function Expression and execution
function greet1(name) {
    var output = 'Hello ' +name+ ' This is the Greet1 function';
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
function greet2(name) {
    var output = 'Hello ' +name+ ' This is the Greet2 function';
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
function greetEngine(fName , name) {
    fName(name);
}
greetEngine(greet1, 'Ravi');
greetEngine(greet2, 'Ravi');

// Functions as arguments without args



// Functions as arguments with args args


// Functions in Objects and Execution


// this keyword for accessing objects props in function

// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee = {
    name: 'Raju',
    age: 30,
    desg: 'Manager',
    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    },
    isFromCity: function (city) {
        return this.address.city === city;
    },

    isFromState: function (state) {
        return this.address.state === state;
    },

    isFromCountry: function (country) {
        return this.address.country === country;
    }
}
console.log("Is from Hyd ? " + employee.isFromCity('Hyderabad'));
console.log("Is from Telangana ? " + employee.isFromState('Telangana'));
console.log("Is from India ? " + employee.isFromCountry('India'));


// Default Function Arguments (arguments)
function defaultArgs() {
    var output = "The Args are : ";
    console.log(arguments);

}

defaultArgs('John', 40 , 'Manager',  50000);