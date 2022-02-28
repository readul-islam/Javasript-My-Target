const examNumber = [39, 49, 90, 23, 45, 21, 90];
let i = 0;
const result = examNumber.map(num => {
    if (num < 50) {
        num += i;
        return num;
    }
    else if ( num > 50){
        num = num - 40;
        return num;
    }
});
console.log(result);