const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)) //second promise will return raw data
    //by spreading we can change the array into individual arguments

function findMatches(wordToMatch, cities) {
    //cities is an argument because we want to pass in the data from the array
    return cities.filter(place => {
        //here we need to figure out if the city/state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi') //g stands for global and i is for 
        //upper and lowercase letters
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})*(?!\d))/g, ',');
}

function displayMatches() {
    //this function will be called whenever someone changes the value of input
    //and will find any matches
    // console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    //because the .map will return an array and we want a string, we will add .join('')
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
//'change' eventlistener is fired when you click out of the input value area 
searchInput.addEventListener('keyup', displayMatches); 
// if you want eventlistener to be fired when anything changes in the input value area
//eventlistener must listen to 'keyup'