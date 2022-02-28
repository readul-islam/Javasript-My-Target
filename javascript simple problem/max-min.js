// find max number with Max javascript
var myMoney = 500;
var herMoney = 300;
var yourMoney = 700;
// max number ber korar jnno Math.max(para1, para2, para3...)
var Max = Math.max(myMoney, herMoney, yourMoney);
console.log(Max);
// min number ber korte Math.min(para1, para2, para3 ...)
var minNumber = Math.min(myMoney, herMoney, yourMoney);
console.log(minNumber);


// maxnumber find with condition 
var a = 420;
var b = 490;
var c = 5020;
if (a > b && a > c) {
    console.log(a, 'this biggest number');
}
else if (b > a && b > c) {
    console.log(b, 'this is biggest number');
}
else {
    console.log(c, 'this is biggest number')
}

// minNumber find with condition 
if (c < a && c < b) {
    console.log(c, 'this is lowest number')
}
else if (b < a && b < c) {
    console.log(c, 'this is lowest number')
}
else {
    console.log(a, 'this is lowwer number ')
}

function biggestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    
        return num3;
    
        
    
}
var myNumber = 100;
var yourNumber = 120;
var herNumber = 300;
const isBeggier = biggestNumber(myNumber, yourNumber, herNumber);
console.log(isBeggier,",wow! this is biggest number");