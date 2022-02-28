const commentBtn = ()=>{
    
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(Response => Response.json())
    .then(data => displayData(data));
}
const displayData = comments =>{
    const cutCommetn = comments.slice(0,100);
    const div = document.getElementById('comment-container');
    cutCommetn.forEach(comment =>{
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `<h2>${comment.name}</h2>
                             <h4>Email: ${comment.email} </h4>
                        <p>comment: ${comment.body}</p>`;
        div.appendChild(createDiv);
    })

}