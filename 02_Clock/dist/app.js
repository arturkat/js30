document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {
// beggin
    var millisecondHand = document.querySelector('.clock-dial .milliseconds'),
        millisecondDeg,
        secondHand = document.querySelector('.clock-dial .seconds'),
        secondDeg,
        minuteHand = document.querySelector('.clock-dial .minutes'),
        minuteDeg,
        hourHand = document.querySelector('.clock-dial .hours'),
        hourDeg,
        time;

    setInterval(() => {
        rotateHands();
        switchHandColor();
    }, 10);

    function rotateHands() {
        time = new Date();

        // millisecondDeg = time.getMilliseconds() * (360 / 1000);
        millisecondDeg = (time.getMilliseconds() / 1000) * 360;
        millisecondHand.style.transform = `rotate(${millisecondDeg}deg)`;

        // secondDeg = time.getSeconds() * (360 / 60);
        secondDeg = (time.getSeconds() / 60) * 360;
        secondDeg = secondDeg + (6/1000 * time.getMilliseconds());
        secondHand.style.transform = `rotate(${secondDeg}deg)`;

        // minuteDeg = time.getMinutes() * (360 / 60);
        minuteDeg =(time.getMinutes() / 60) * 360;
        minuteDeg = minuteDeg + (6/60 * time.getSeconds());
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        
        // hourDeg = time.getHours() * (360 / 12);
        hourDeg = (time.getHours() / 12) * 360;
        hourDeg = hourDeg + (30/60 * time.getMinutes());
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }

    function switchHandColor() {
        var currSeconds = new Date().getSeconds();
        if ( !('prevSeconds' in switchHandColor) ) {
            switchHandColor.prevSeconds;
        }
        
        if (currSeconds !== switchHandColor.prevSeconds) {
            switchHandColor.prevSeconds = currSeconds;
            millisecondHand.style.borderColor = randomColor();
        }
    }

    function randomColor(maxNumber) {
        maxNumber = maxNumber || 256;
        var r = function() {return Math.floor(Math.random()*maxNumber)};
        return `rgb(${r()}, ${r()}, ${r()})`;
    }
// end
}