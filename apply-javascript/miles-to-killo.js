// best way for programing
//   highly  recommended 
function convertKm(miles){
    var expresion = miles / 1.609344;
    return expresion;
}

var totalMiles = 102010;
var result = convertKm(totalMiles);
console.log(result);


// different way solve this problem
var barisalToDhaka = 195;
var calculate = barisalToDhaka / 1.609344;
console.log(calculate);