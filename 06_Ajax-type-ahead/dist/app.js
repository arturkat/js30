document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {
// Global vars
var arrCitites = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

init();

function init() {
    getAllCities();
    setListeners();
}

function getAllCities() {
    var request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.addEventListener('load', requestListener, false);
    request.responceType = 'json';
    request.send();

    function requestListener() {
        arrCitites = JSON.parse(this.response);
        console.dir(arrCitites);

        populateTheList();
    }
}

function populateTheList() {
    var suggestions = document.querySelector('.suggestions');
    suggestions.innerHTML = '';

    arrCitites.forEach((cityObj, index) => {
        var li = document.createElement('li'),
            span = document.createElement('span');

        li.textContent = `${cityObj.city}, ${cityObj.state}`;
        li.setAttribute('data-location', `${cityObj.city.toLowerCase()} ${cityObj.state.toLowerCase()}`);
        span.textContent = `${cityObj.population}`;

        li.appendChild(span);
        suggestions.appendChild(li);
    });
}

function setListeners() {
    var search = document.querySelector('.search');

    search.addEventListener('input', function (e) {
        var li = document.querySelectorAll('.suggestions li');
        var searchStr = search.value.toLowerCase();

        if (!li) return;

        li.forEach((elem, index) => {
            if (elem.dataset.location.indexOf(searchStr) > -1) {
                elem.classList.remove('hide');
            } else {
                elem.classList.add('hide');
            }
        });
    });
}

}