const searchBtn = () => {
    const inputFlied = document.getElementById('input-filed');
    const searchButton = document.getElementById('src-btn');

    let buttonValue = searchButton.value
    buttonValue = inputFlied.value;

    inputFlied.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buttonValue}`)
        .then(Response => Response.json())
        .then(data => displayData(data.meals));

}
const displayData = mealsArray => {
    const cardInfo = document.getElementById('card');
    cardInfo.textContent = '';
    mealsArray.forEach(mealsdata => {
        //  console.log(mealsdata);
        const createDiv = document.createElement('div');
        createDiv.classList.add('card');
        createDiv.innerHTML = `  
    
    <img onclick =" cardInfo(${mealsdata.idMeal})" src="${mealsdata.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer ">
        <button onclick =" cardInfo(${mealsdata.idMeal})" class="bg-primary text-white  border-0 ">Details</button>
    </div>`;
        cardInfo.appendChild(createDiv);
    })
}
const cardInfo = details => {

    // console.log(details);



    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`)
        .then(Response => Response.json())
        .then(data => displayDetails(data.meals[0]));

}
const displayDetails = moreInfo => {
    const detailsCard = document.getElementById('details-card');
    detailsCard.textContent = '';
    const createAdiv = document.createElement('div');
    createAdiv.classList.add('card');
    createAdiv.innerHTML = `  
    
    <img  src="${moreInfo.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.</p>
    </div>`;
    detailsCard.appendChild(createAdiv);

}