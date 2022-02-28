const submitBtn = () =>{
   fetch('https://jsonplaceholder.typicode.com/posts/')
   .then(Response => Response.json())
   .then(data => displayData(data)); 
   
    hideSpinner(); 
   
}
const displayData = posts =>{
    const mainDiv = document.getElementById('posts-div');
posts.forEach(post => {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `<h3><span">${post.id}. </span> ${post.title}</h3>
    <p>${post.body}</p>`;
    mainDiv.appendChild(createDiv);
    console.log(post);
    
})
}
function hideSpinner() {
    document.getElementById('spinner')
            .style.display = 'none';
} 

