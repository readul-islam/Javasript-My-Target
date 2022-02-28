// factorial -with- while loop decrement 
function isFactorial(factNumber){
 var factorial = 1;
 var i = factNumber;
 while( i >= 1){
     var factorial = factorial * i;
     i--;
 }
 return factorial;
}
var number = 10;
var result = isFactorial(number);
console.log(result);
var number1 = 7;
var result = isFactorial(number1);
console.log(result);