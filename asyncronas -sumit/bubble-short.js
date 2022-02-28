const numbers = [98, 1, 5, 10, 7, 11, 53, 4,  3];
const bubbleShort = (arr) => {
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    for(let j = 0; j<arr.length; j++){
       if(arr[j] < arr[j+1]){
           [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
       }
    }
}
}

bubbleShort(numbers);
console.log(numbers);