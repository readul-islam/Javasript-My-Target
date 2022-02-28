document.getElementById('event-handler').addEventListener('click',function(){
    const commentBox = document.getElementById('comment-box');
    const createP = document.createElement('p');
    createP.innerText = commentBox.value;
    const commentSection = document.getElementById('comment-section').appendChild(createP);
    commentBox.value = '';
})