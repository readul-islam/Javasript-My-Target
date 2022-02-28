initNumber = [0, 1];
// 0 1 1 2 3 5 8
// 5th(i) = (i-1) + (i-2)
for (i = 2; i <= 10; i++){
    initNumber[i] = initNumber[(i -1)] + initNumber [(i-2)]
}
console.log(initNumber);
nth = n-1 + n-2
