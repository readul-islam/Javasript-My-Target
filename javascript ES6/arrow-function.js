const oddNumber = (num1, num2) => num1 + num2;
console.log(oddNumber(5, 5));

const evenNumber = (number1, number2) =>{
    if (number1 % number2 == 0){
        return false;
    }
    else{
        return true;

    }
}
console.log(`This is odd number `,evenNumber(9,2));