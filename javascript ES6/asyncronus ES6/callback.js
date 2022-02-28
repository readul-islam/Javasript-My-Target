function squre(x){
    console.log(`this is ${x}`)
}
// squre(10)
function higerOrderFunction(num, callback){
callback(num)
}
// higerOrderFunction(6, squre);



const taskOne = (callback) =>{
    console.log('this is task one')
    callback()
};


const taskTwo = (callback) => {
 setTimeout(() =>{
    
    
     console.log('thdsjdfjklj ldfjkld'
     )
 }, 1000)
 callback()
};


   

const taskThree = (callback) =>{
    console.log('this is task three')
    callback()

};
const taskFour = (callback) =>{
    console.log('this is task four');
    callback
}
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
          taskFour();  
        })
    })
});
 
 
 