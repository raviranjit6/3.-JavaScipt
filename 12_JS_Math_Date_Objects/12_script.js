/*
        Math Object Examples

     */

// Math PI and Sqrt
var piValue = Math.PI;
console.log("The PI Value = " +piValue);

var sqrt = Math.sqrt(256);
console.log('The Squre root of 256 = ' +sqrt);

// find the min of 4 numbers
var min = Math.min(10, 50, 20, 30, 40);
console.log('The Min Value = ' + min);

// find the Max of 4 numbers
var max = Math.max(10, 50, 20, 30, 40);
console.log('The Max Value = ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var power= Math.pow(2 , 4);
console.log('2 ^ 4 = ' + power);

// generate the random numbers from 0 to 100000
var random = Math.round(Math.random() * 100000);
console.log('Random Value = ' + random);
document.getElementById('display').innerHTML = 'Random Value : ' +random;

/* For more details about Math Object, please have a look at
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
   */

/*
    Date Object Examples

 */

// get today's date
var today = new Date();
console.log(today);

//normal date
var date = today.getDate() + " / " + (today.getMonth() + 1) + " / " +today.getFullYear();
console.log(date);


//get date of the month 0 - 31 getDate()
//get day of the week 0 - 6 getDay()
// get full day of the week using switch statement
var day = today.getDay();
var fullDay = "Today is : ";
switch (day){
    case 0:
        fullDay += 'Sunday';
        break;
    case 1:
        fullDay += 'Monday';
        break;
    case 2:
        fullDay += 'Wednesday';
        break;
    case 3:
        fullDay += 'Thursday';
        break;
    case 4:
        fullDay += 'Friday';
        break;
    case 5:
        fullDay += 'Saturday';
        break;
    default:
        fullday += 'No Value';

}
console.log(fullDay);

// Display a Digital Clock on the web page
function indianTime() {
    var today = new Date();
    var options = {timeZone : "Asia/Kolkata"};
    var time = today.toLocaleTimeString('en-us', options);
    document.getElementById('display1').innerHTML = "Indian Time = " + time;
}
setInterval(indianTime, 1000);

function usTime() {
    var today = new Date();
    var options = {timeZone : "America/NewYork"};
    var time = today.toLocaleTimeString('en-us', options);
    document.getElementById('clock').innerHTML = "US Time = " + time;
}
setInterval(usTime, 1000);

//String Examples
var greet = "Good Morning";
console.log('Length of greet is ' + greet.length);

//subString()
var subStr = greet.substring(0,4);
console.log(subStr); //
var remString = greet.substring(5);
console.log(remString);

//toLowerCase()
var str = "GOOD MORNING";
console.log("str : " +str.toLowerCase());

//toUpperCase()
var str1 = "good morning";
console.log("str : " +str1.toUpperCase());

//charAt()
console.log("charAt index 5 : " +str1.charAt(5));

//Number
console.log("Max value in JS is " + Number.MAX_VALUE);
console.log("Min value in JS is " + Number.MIN_VALUE);

//parseInt()
var strNum1 = "123";
var num1 = parseInt(strNum1);
console.log("num1 : " + num1 + "Type :" + typeof num1);

//isNaN()
var myStr = "Test";
if(isNaN(parseInt(myStr))){
    console.log("It Is not A Number");
}
else {
    console.log("It Is  A Number");
}









/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/