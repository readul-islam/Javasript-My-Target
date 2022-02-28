const searchBtn = () =>{
    let searchButton = document.getElementById('btn-src');
    let inputFlied = document.getElementById('input-filed');
    searchBtnValue = searchButton.value;
    inputFliedValue = inputFlied.value;
    searchBtnValue = inputFliedValue;
    console.log(searchBtnValue);
    inputFlied.value = '';
}
const commonDataLoad = (url, callback) =>{
    fetch(url)
    .then(Response => Response.json())
    .then(data => displayData(data))
    .catch(err => console.log(err));
}


 const loadData = () => {
     const url = `https://fakestoreapi.com/products`;
    commonDataLoad(url);
 }

loadData();

const displayData = (products) =>{
    // console.log(products)
   const div = document.getElementById('api-container');
   products.forEach(product =>{
     let  createADiv = document.createElement('div');
     createADiv.classList.add('styling')
     createADiv.innerHTML = `<div class="col">
     <div class="card h-100">
       <img  src="${product.image}" class="card-img-top " alt="...">
       <div class="card-body">
         <h5 class="card-title">${product.title}</h5>
         <h3> $${product.price}</h3>
         <p class="card-text">${product.description}</p>
       </div>
     </div>
   </div>`;
   div.appendChild(createADiv)
       
   })
}
