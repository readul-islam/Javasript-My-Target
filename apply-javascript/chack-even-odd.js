// chack even number with if-else, else if, function 
// 1.for loop
var number = 620;
if (number % 2 == 0 && number % 2 != 1) {
    console.log('This is even number');
}
else{
    console.log('this is odd number');
}

var number = 621;
if (number % 2 == 0 && number % 2 != 1) {
    console.log('This is even number');
}
else{
    console.log('this is odd number');
}

// function isEven(num){
//     if (num % 2 == 0){
//         console.log('this is even');
        
//     }
    
//     else if( num % 2 != 0){
//         console.log('This is odd')
        
//     }
//     else{
//         console.log('Your experation invalid')
//     }
// }
// isEven(101);

function isEvenNumber(num){
 var calculate = num % 2;
 if (calculate == 1){
    return true;
 }
 return false;
}

var numbers = 5258;
const isEven = isEvenNumber(numbers);
console.log(isEven);