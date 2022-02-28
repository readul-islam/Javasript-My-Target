// program to find the factorial of a number
function factorial(x) {

    console.log(x);
    if (x === 1) {
        return 1;
    }

    
    else {
        return x * factorial(x - 1);
    }
}

const num = 5;

// calling factorial() if num is non-negative

    let result = factorial(num);
    console.log(result);
