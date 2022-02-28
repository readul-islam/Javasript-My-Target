console.log(`Welcome`);

const promise = new Promise((resolve, reject) => {
    const haveMoney = true;
    if (haveMoney) {
        resolve(`this is resolve`);
    }
    else {
        reject(new Error(`this is error`))
    }
})


const promise1 = new Promise((resolve, reject) => {
    resolve(`completed resolve`)
})



Promise.all([promise, promise1])
    .then(([res1, res2]) => console.log(res1, res2))
// .then(res => console.log(res));

// promise
// .then((res) => {
//    console.log(res); 
// }).catch((err) => {
//     console.log(err);
// });
// promise1.then(res => console.log(res))
console.log(`end`);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`completed resolve this 1`);
    }, 3000)
})
const friendPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`completed resolve this 2`);
    }, 2000)
})
Promise.race([myPromise, friendPromise]).then(res => console.log(res));