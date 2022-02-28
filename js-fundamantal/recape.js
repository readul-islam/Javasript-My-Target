// first day 
// deceleration concept for variable 
// need five think for a deceler a variable 
// first at all use a keyword
// 2cnd use a name for a variable 
// 3rd use a assignment operator 
// 4th assign a valu 
var a = 22;
var b = 33;
// concept second Datatype
// used three datatypes in class 
// 1.number 
var a = 10;
var b = 20;
// 2.string
// string addition always make a string with number or string
var c = "Akash";
var d = "20";
// 3.boolean
var f = true;
var g = false;

 
// 2cnd day
// conversion with array 
// deceler a array
var friendsName = ['Akash Mahamud', 'Readul', 'Sagor', 'Hridoy', 'Alim'];

// find an array length use arrayname.length 
console.log(friendsName.length);
// you want an array one element position you use indexof() and find this element position 
var positioFind = friendsName.indexOf('Alim');
console.log(positioFind);

// if you want changed an array element use this way array-name[] = new value assign
friendsName[4] = 'sujon';
console.log(friendsName);

// add and remove a element for begining use unshift and shift
// add and remove a element for lastposition use push and pop

// 1.begining

// friendsName.unshift(add element);
// friendsName.shift();

// 2.lastposition

// friendsName.push(add element);
// friendsName.pop();

// day-3
// concept condition for if else, else if nasted if else
var egg = 30;
var money = 20;
var marriedMoney = 25000;
var haveMoney = 15000;
var flat = true;
// only if else 
if ((money > egg && marriedMoney < haveMoney) || flat ==false ){
    console.log("i don't buy eggs and amr kopal a biya nai i go my home");
}
else {
    console.log("i have money for eggs");
}

// nassted if else use now 
// what is a nested if else condition 
// when one  if else into other if else 
var myAge = 20;
var myBrotherAge = 22;
var sisterAge = 24;
if (myAge < myBrotherAge){
    if (myAge < sisterAge){
        console.log('I am little boy of my family');
    }
    else{
        console.log('yah i am big bro');
    }
}
else{
    console.log('I am first child of my family');
}

// day.3
// loop
// 1.while loop
var x = 0;
while ( x <= 10 ){
    console.log(x);
console.log('this is output');

x++;
} 

//  2.for loop
for (var i = 1; i <= 10; i++){
    console.log(i);
    console.log('counting ranning');
}
