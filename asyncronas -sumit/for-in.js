const friends = {
    id: 100,
    name: 'Readul Islam',
    age: 20,
    collage: 'National University',
    subject: 'political Science'
}
for (const details in friends){ 
    // console.log(details, friends[details]);
}
// access all keys 
const key = Object.keys(friends);
const values = Object.values(friends);
// console.log(key[0]);
// console.log(values[0]);
for (let info of values){
    // console.log(info)
}
const keypair = Object.entries(friends)
// console.log(keypair);
// entries give me a multidimentional Array;
for (let i = 0; i < keypair.length; i++){
    let accessarr = keypair[i].length;
    for (let j = 0; j < accessarr; j++){
       console.log(keypair[i][j]);
    }
}
