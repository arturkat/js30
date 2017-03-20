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
        var li = document.createElement('li');
        li.textContent = cityObj.city;
        suggestions.appendChild(li);
    });
}

function setListeners() {
    var search = document.querySelector('.search');

    search.addEventListener('keydown', function (e) {
        console.log(e.key);
    });
}


// end
}