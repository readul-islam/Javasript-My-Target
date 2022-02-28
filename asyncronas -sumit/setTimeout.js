// setTimeout( ()=>{
//     console.log(`this print after 5 seconde `);
// },5000)
// console.log(`i am printed `);



// function myFunction(){
//     console.log(`this is my function for settimeout`);
// }
// let a = setTimeout(myFunction, 3000);
// console.log(a);


function showTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    // console.log(time);

}
setTimeout(showTime, 9000);
showTime()

