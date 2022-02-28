//  maltidimenosial arry 
 const friends = [
     [1, 2, 3],  
     [4, 5, 6],
     [7, 8, 9]
 ];
 for (let i = 0; i <= friends[1].length; i++){
     let result = friends[1][i];
    //  console.log(result)
 }
//  friends[0][2]=100;
 
//  friends.push([10, 11, 12]);
//  console.log(friends);
friends.forEach(arr =>{
    
    arr.forEach(number =>{
       // console.log(arr)
    })
})
for (let i = 0;  i<friends.length; i++){
    let multiaccess = friends[i].length;
    for (let j = 0; j <multiaccess; j++){
        console.log(friends[i][j]);
    }
}