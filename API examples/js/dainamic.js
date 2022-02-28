const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {
    
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country-style');
        div.innerHTML = `<h2>${country.name.common}</h2>
        <p>${country.capital}</p>
        <button onclick ="countryBtn('${country.name.common}')">Chack</button>`;
        countriesDiv.appendChild(div);

        
        

    })
    
};
const countryBtn = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => countryInfo(data[0]))
}
const countryInfo = chackCountry=>{
    // console.log(chackCountry);
    const divTwo = document.getElementById('country-detiles');
    divTwo.innerHTML = 
    `<h2>${chackCountry.name.common}</h2>
     <p>population: ${chackCountry.population}</p>
    <img width="200px" src="${chackCountry.flags.png}"> `;


}