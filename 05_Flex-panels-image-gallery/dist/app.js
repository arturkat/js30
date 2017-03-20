document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {
// beggin
var panels = document.querySelectorAll('.flex-panel');
panels.forEach(function (panel) {
    panel.addEventListener('click', animatePanel);
});

function animatePanel(e) {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
        return;
    }

    var activePanel = document.querySelector('.flex-panel.active');
    if (activePanel) {
        activePanel.classList.remove('active');
    }

    this.classList.add('active');
}
// end
}
