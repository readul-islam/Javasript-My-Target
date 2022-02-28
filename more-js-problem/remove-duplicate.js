const numbers= [ 20, 30, 40, 20, 30, 5, 40, 2, 70, 80, 70, 5]
function duplicateNumber(number){
    var init = [];
    for(let element of number){
        if (init.indexOf(element) == -1){
            init.push(element);
        }
        
    }
    
    return init;
}

var result = duplicateNumber(numbers);
console.log(result);