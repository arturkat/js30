document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {
    // Global vars
    const cities = [];
    const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const suggestions = document.querySelector('.suggestions');
    const search = document.querySelector('.search');


    search.addEventListener('keyup', displayMatches);
    search.addEventListener('change', displayMatches);


    fetch(url)
        .then(blob => {
            return blob.json()
        })
        .then(data => {
            cities.push(...data);
        });

    function findMatches(cities, searchStr) {
        const foundPlaces = cities.filter((place) => {
            const regex = new RegExp(searchStr, 'gi');
            const matchResult = place.city.match(regex);
            return place.city.match(regex) || place.state.match(regex); // null or array or boolean
        });
        return foundPlaces;
    }

    function displayMatches() {
        const foundPlaces = findMatches(cities, this.value);
        const html = foundPlaces.map((place) => {
            const regexp = new RegExp(this.value, 'ig');
            const city = place.city.replace(regexp, `<b>${this.value}</b>`);
            const state = place.state.replace(regexp, `<b>${this.value}</b>`);
            return `
                <li>${city}, ${state} <span>${place.population}</span></li>
            `;
        });
        suggestions.innerHTML = html.join('');
    }

}