// function call button inside
function makeRed() {
    document.body.style.backgroundColor = "yellow";
}



// handle event using function name
const findId = document.getElementById('make-blue');
findId.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// handle event using addEventListener and function name
const parple = document.getElementById('make-purple');
parple.addEventListener('click', makeParple);
function makeParple(){
    document.body.style.backgroundColor = 'purple';
}
// handle event using addEventListener and with function without functionName this is anonymus function
const goldenrod = document.getElementById('make-goldenrod');
goldenrod.addEventListener('click', function (){
    document.body.style.backgroundColor = 'goldenrod';
})
// shortcut way handle event using addEventListener and function 
document.getElementById('make-pink').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})