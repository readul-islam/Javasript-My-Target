function addNumber(numbers){
 let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        element = numbers[i];
        sum = sum + element;
    }
    return sum;
}



var number = [10, 40, 60, 45, 7, 90, 10];
var totalSum = addNumber(number);
console.log(totalSum);