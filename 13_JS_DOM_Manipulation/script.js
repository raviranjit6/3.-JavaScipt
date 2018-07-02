//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('Width of the browser is ' + width + ' px');
document.getElementById('display').innerHTML =
    'Width of the browser is ' + width + ' px';
// Open a new Tab
//window.open();
// DOM Properties to get body , title , URL
var body = document.body;
console.log(body);

var title = document.title;
var output = "Title : " + title;
console.log(output);
document.getElementById('display').innerHTML = output;

var url = document.URL;
console.log(url);
document.querySelector('#display').innerHTML= url;
//DOM Methods
var time = 10;
if (time <= 12){
    document.querySelector('#display').innerHTML= "Good Morning";
}
else if (time > 12 && time <=17){
    document.querySelector('#display').innerHTML= "Good Afternoon";
}
else{
    document.querySelector('#display').innerHTML= "Good Evening";
}
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events