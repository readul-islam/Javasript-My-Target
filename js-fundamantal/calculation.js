// declear a function for difference two number 
function differnceNumber(num1, num2, num3){
console.log("this a function for three number calculation");
// var distance = num1 * num2

var distance = (num1 / num2 + num3 * 4) % num2;
return distance;

}

var number1 = 20;
var number2 = 40;
var number3 = 10;
var myCalculation = differnceNumber(number2, number3, number1);
console.log(myCalculation);