// 1.leap year chack with if else
var year = 2132;
if ( (year % 4 == 0 && year % 100 != 0 ) && year % 400 == 0){
    console.log('this is leap year')
}
else{
    console.log('this not leap year', year)
}

// .2 chack leap year with function 

function isLeapYear(year){
    if ( (year % 4 == 0 && year % 100 != 0) ||( 0 == 400 % 2)){
        return true;
    }
    else{
        return false;
    }
}

var isYear = 2000;
var result = isLeapYear(isYear);
console.log("This is leap year--", result);