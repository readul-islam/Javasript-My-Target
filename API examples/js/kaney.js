const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(Response => Response.json())
    .then(data => displayQuotes(data));
}

const displayQuotes = getdata =>{
console.log(getdata);
const quoteElement = document.getElementById('quote');
const createH = document.createElement('h1');
const intoElement = quoteElement.appendChild(createH);

intoElement.innerText = getdata.quote;
}