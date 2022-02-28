function largestNumber(numbers) {
    initNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > initNumber) {
            initNumber = element;
        }
    }
    return element;
}
const exnumber = [ 20, 45, 6, 70 ,9, 80, 120]
var largeNumber = largestNumber(exnumber);
console.log(largeNumber);