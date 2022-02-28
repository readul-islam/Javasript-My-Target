var isString = 'Hello, ! how are you?'
function isReversed(text){
    let reverse = '';
    for(let latter of text){
        reverse =  latter + reverse;
    }
    return reverse;
}
const reversed = isReversed(isString);
console.log(reversed);
