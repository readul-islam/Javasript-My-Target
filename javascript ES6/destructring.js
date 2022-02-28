// Object er akadik value ak sathe rakher jonno destructing use hoy 
// const friend = {
//     name:'Akash',
//     age :20,
//     lastname: 'Mahamud',
//     passion:{
//         work:'web development',
//         possition:{
//             carrer:'junior development',
//         },

//     },
//     adress:'Barisa'
// };
// const {name,adress, work,carrer} = friend.passion.possition;
// console.log(name, adress,work,carrer);
// const chack = friend.name;
// console.log(chack);
const {name,passion, adress, country,pass} = { age: 20, name:'Akash Mahamud',country:'bangladesh', passion:{
    pass:'web development'
}};
console.log(passion.pass);
// Always consider using rest operator as the last element
const [a, b,...c] = [1, 2, 3, 4];
console.log(a, b, c);

// Swapping variables
// Two variables values can be swapped in one destructuring expression.
let aa = 1;
let bb = 3;
[aa, bb] = [bb, aa];
console.log(aa, bb);