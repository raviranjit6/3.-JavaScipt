// If Else condition Example
var age = 18;
if (age <= 18){
    output = "You will not get Driving Licence";
}
else{
    output = "You will get Driving Licence";
}
console.log(output);
document.getElementById('display').innerHTML = output;




// For loop Example to display from 1 - 10 values
output= "";
for(var i = 1; i <= 10; i++){
    if(i <= 9) {
        output += i + " ," ;
    }
    else{
        output += i;
    }
}
console.log(output);
document.getElementById('display').innerHTML = output;


// While loop Example to display from 1 - 10 values
var i = 1;
output = "";
while(i <= 10){
    if(i <= 9){
        output += i + "-" ;
    }
    else{
        output += i;
    }
    i++;
}
console.log(output);
document.getElementById('display').innerHTML = output;

// Do while loop Example to display from 1 - 10 values
i = 19;
output = " ";
do{
    if(i <= 9){
        output += i + "--" ;
    }
    else{
        output += i;
    }
    i++;
}
while(i <= 10)
console.log(output);
document.getElementById('display').innerHTML = output;



// Switch Statement Example to display full Day
var today = new Date().getDay();
switch(today){
    case 0:
        output= 'Sunday';
        break;
    case 1:
        output= 'Monday';
        break;
    case 2:
        output= 'Tueday';
        break;
    case 3:
        output= 'Wednesday';
        break;
    case 4:
        output= 'Thuday';
        break;
    case 5:
        output= 'Friday';
        break;
    case 6:
        output= 'Saturday';
        break;

    default:
        output= 'notSure';
        break;
}
console.log(output);
document.getElementById('display').innerHTML = output;