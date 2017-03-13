document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {

/* Sliders */
var rangeInput = document.querySelectorAll('input[type=range]');
rangeInput.forEach(function (element, index) {
    element.addEventListener('input', onSlide);
    element.addEventListener('change', onSlide);
});

function onSlide(e) {
    if (this.id == 'piza-padding') {
        var html = document.querySelector(':root');
        var htmlComputedStyle = window.getComputedStyle(html);
        var pizaPadding = htmlComputedStyle.getPropertyValue('--piza-padding');

        html.style.setProperty('--piza-padding', `${this.value}px`);
    }

    if (this.id == 'piza-blur') {
        var html = document.querySelector(':root');
        var htmlComputedStyle = window.getComputedStyle(html);
        var currentPizaBlur = htmlComputedStyle.getPropertyValue('--piza-blur');

        html.style.setProperty('--piza-blur', `${this.value}px`);
    }
}


/* Color Picker */
var colorInput = document.querySelector('input[type=color]');
colorInput.addEventListener('change', onColorPick);

function onColorPick(e) {
    var html = document.querySelector(':root');
    var htmlComputedStyle = window.getComputedStyle(html);
    var pizaColor = htmlComputedStyle.getPropertyValue('--piza-bg-color');

    html.style.setProperty('--piza-bg-color', `${this.value}`);
}

}