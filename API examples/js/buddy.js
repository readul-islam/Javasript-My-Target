const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(Response => Response.json())
    .then(data => displayBuddies(data));
}
loadBuddies();
const displayBuddies = getdata =>{
    console.log(getdata);
   const objectBuddy = getdata.results;
   const buddiesDiv = document.getElementById('buddies');
   for (const buddi of objectBuddy){
    const createP = document.createElement('h5');
    createP.innerText = `Name: ${buddi.name.title} ${buddi.name.first} ${buddi.name.last}
    Email: ${buddi.email}`
    ;
    buddiesDiv.appendChild(createP);
   };
}