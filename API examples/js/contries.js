// const loadCountries = () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(Response => Response.json())
//     .then(data => displayCountries(data));
// }
// loadCountries();
// const displayCountries = countries => {
//     // console.log(contries);
//     const countriesDiv = document.getElementById('contries');
//     countries.forEach(country =>{
//         // console.log(country);
//         const div = document.createElement('div');
//         div.classList.add('country-style');
//         const h2 = document.createElement('h2');
//         const p = document.createElement('p');
//         h2.innerText =country.name.common;
//         p.innerText =`Capital: ${country.capital}`;
//         div.appendChild(h2);
//         div.appendChild(p);
//         countriesDiv.appendChild(div);
//     })
// }
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));