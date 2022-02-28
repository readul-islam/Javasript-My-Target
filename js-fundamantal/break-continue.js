// break example 
// 1.for loop
// for(let i = 1; i <= 10; i++){
//     // console.log(i);
//     if (i == 5){
//         break;
//     }
// }
// 2.while loop
// let i = 1;
// while(i <=10){
//     // console.log(i);
//     if (i == 9){
//         break;
        
//     }
//     i++;
// }


// .continue definition avoid condition value
// 
// for loop with array
// var number = [ 5, 10, 20, 50, 105, 90, 300, 55, 69]
// for( let i = 0; i < number.length; i++){
//     var numbers = number[i];
//     if (numbers > 90){
//         continue;
//     }
    
    // console.log(numbers);
// }

// while for continue
var number = [ 5, 10, 20, 50, 105, 90, 300, 30, 69];
var i = 0;

while ( i < number.length){
    var isArray = number[i];
    i++;
    if ( isArray >= 90){
        continue;
    }
    
    console.log(isArray);
    
}














// function addNumber(number1, number2){
//     return " result is " + number1 + number2;  
// }
// var result = addNumber(5, 4);
// console.log(typeof result);