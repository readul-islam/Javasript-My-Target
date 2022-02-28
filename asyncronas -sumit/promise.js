const haveMoney = false;
const setPromise = new Promise((resolve, reject) =>{
    if(haveMoney){
        resolve(`this is solved`);
    }
    else{
        reject(`this is rejected`);
    }
});
setPromise
.then(res => {
    console.log(res)
})
.catch(err =>{
    console.log(err)
})