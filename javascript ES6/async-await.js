const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve(`task one is completed`)
    })
}
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        
            resolve(`task two is completed`)
       
    })
}
const taskThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        resolve(`task three is completed`)
    }, 3000)
    })
}
const taskFour = () => {
    return new Promise((resolve, reject) => {
        reject(`this is not completed`);
    })
}
const asynAwait = async () => {
try{
    const task1 = await taskOne();
console.log(task1);

const task2 = await taskTwo();
console.log(task2);

const task3 = await taskThree();
console.log(task3);

const task4 = await taskFour();
console.log(task4);
} catch(e){
    console.log(e)
}

}

asynAwait();