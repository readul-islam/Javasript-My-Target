// multiple unit convert with function 
// 1.ince to feet 
// this is best way for multiple inces convert to feet 

function convertFeet(inces){
    var expresion = inces / 12;
    return expresion;
}
let ince = 420;


var result = convertFeet(ince);
console.log(result);

let ince1 = 516;
var result = convertFeet(ince1);
console.log(result);

let ince2 = 1020;
var result = convertFeet(ince2);
console.log(result);

// different way convert inces to feet
var totalInces = 220;
var convertToFeet = totalInces / 12;
console.log(convertToFeet);

var myInces = 416;
var convertMyFeet = myInces / 12;
console.log(convertMyFeet);

var yourInces = 1660;
var convertYourFeet = yourInces / 12;
console.log(convertYourFeet);