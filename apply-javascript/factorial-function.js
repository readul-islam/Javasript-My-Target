function isFactorial(factorialNumber){
    var factorial = 1;
    for(var i = 1; i <= factorialNumber; i++){
        var factorial = factorial * i;
    }
    return factorial;
}
var factNumber = 7;
var result = isFactorial(factNumber);
console.log(result);