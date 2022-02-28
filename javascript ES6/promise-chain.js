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
        resolve(`this is taskfour`);
    })
}
taskFour()
.then(res => console.log(res))
.then(taskThree)
.then(res => console.log(res))
.then(taskTwo)
.then(res => console.log(res))
.then(taskOne)
.then(res => console.log(res))
.catch(err => console.log(err));