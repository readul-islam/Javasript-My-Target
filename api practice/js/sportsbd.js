const searchBtn = () => {
    const inputFlied = document.getElementById('input-Flied');
    const searchButton = document.getElementById('search-button');
    let buttonValue = searchButton.value;

    buttonValue = inputFlied.value;
    inputFlied.value = '';

    const loadData = async () => {
        const url = (`https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${buttonValue}`);

        const Response = await fetch(url);
        const data = await Response.json();
        loadDisplay(data.event)

        


        // fetch(`https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${buttonValue}`)
        // .then(Response => Response.json())
        // .then(data => loadDisplay(data.event));
        // hideSpinner();
    }
    loadData();

}
const loadDisplay = teams => {

    const mainDiv = document.getElementById('sports-filed');
    teams.forEach(team => {
        // console.log(team);
        const createADiv = document.createElement('div');
        createADiv.classList.add('ex-style');
        createADiv.innerHTML = `<h1>${team.strEvent}</h1>
                            <h3>Season: ${team.strSeason}</h3>`;
        mainDiv.appendChild(createADiv);

    })
}

