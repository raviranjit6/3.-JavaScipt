// Closures Example(calling inner() inside outer)

var a = 10;
function outer() {
    var b = 20;
    function  inner() {
        console.log(a);
        console.log(b);
    }
    inner();
}
outer();

//Closure Example1
var x = 10;
function outer() {
    var y = 20;
    var inner = function () {
        x++;
        y++;
        console.log(x);
        console.log(y);
    };
    return inner();
}
var innerFn1 = outer();
innerFn1();// 11 21
var innerFn2 = outer();
innerFn2(); // 12 21   because a is created in global variable so the value changes each time


// Closures Example 2
var a = 10;
function outer() {
    var b = 10;
    var inner = function () {
        console.log(a);
        console.log(b);
    };
    return inner;
}
var innerFn = outer();
innerFn();

// Closures Example 3
var a = 10;

function outer() {
    var b = 20;
    var inner = function () {
        a++;
        b++;
        console.log(a);
        console.log(b);
    };
    return inner;
}

var innerFn1 = outer();
innerFn1(); // 11 21
var innerFn2 = outer();
innerFn2(); // 12 21

// Closures in Callbacks
var a = 10;
var myFn = function () {
    console.log(a);
};

setTimeout(myFn,1000); // callback function
console.log("Done");

// The Module Pattern Intro in JS
var employee = {
    firstName : "Naveen",
    lastName : "Saggam",
    getFirstName :function () {
        return this.firstName;
    },
    getLastName : function () {
        return this.lastName;
    }
};
console.log(employee.name);
document.getElementById('display1').innerHTML =
    employee.firstName;

document.getElementById('display2').innerHTML =
    employee.getFirstName();

function Employee() {
    var firstName = "Naveen";
    var lastName = "Saggam";

    var employee = {
        getFirstName : function() {
            return firstName;
        },
        getLastName :function() {
            return lastName;
        },
        setFirstName :function(name) {
            firstName = name;
        },
        setLastName : function(name) {
            lastName = name;
        }
    };
    return employee;
}

var employeeNew = Employee();
document.getElementById('display1').innerHTML =
    employeeNew.firstName;

document.getElementById('display2').innerHTML =
    employeeNew.getFirstName();

employeeNew.setFirstName("John");
document.getElementById('display2').innerHTML =
    employeeNew.getFirstName();

//Module pattern example
function createStudent() {
    var firstName = 'Arjun';
    var lastName = 'Reddy';
    var stdObj = {
        getFirstName : function() {
            return firstName;
        },
        getLastName : function() {
            return lastName;
        },
        setFirstName : function(name) {
            firstName = name;
        },
        setLastName : function(name) {
            lastName = name;
        }
    };
    return stdObj;
}
var student = createStudent();

var firstName = "FirstName : " + student.getFirstName();
document.querySelector('#display1').innerHTML = firstName;

var lastName = "LastName : " + student.getLastName();
document.querySelector('#display2').innerHTML = lastName;

student.setFirstName('Amarendra');
student.setLastName('Bahubali');

document.querySelector('#display1').innerHTML = student.getFirstName();
document.querySelector('#display2').innerHTML = student.getLastName();