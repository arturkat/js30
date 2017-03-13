document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {

/* Source WEB: https://code.tutsplus.com/tutorials/the-web-audio-api-what-is-it--cms-23735 */

/*Crete an AudioContext*/
var audioContext;
if (window.AudioContext) {
    audioContext = new AudioContext();
} else {
    audioContext = new webkitAudioContext();
}
console.log(audioContext);



/*Connect the oscillator to our speakers*/
var oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
/*Start the oscillator now*/
oscillator.start(audioContext.currentTime);
/*Stop the oscillator 3 seconds from now*/
oscillator.stop(audioContext.currentTime + 0.1);



/* Load MY.mp3 */
var request = new XMLHttpRequest();
request.open('GET', 'intro.mp3', true);
request.responseType = 'arraybuffer';

request.onload = function() {
    var undecodedAudio = request.response;

    audioContext.decodeAudioData(undecodedAudio, function(audioBuffer) {
        // The contents of our mp3 is now an AudioBuffer
        console.log(audioBuffer);
        
        // Create the AudioBufferSourceNode
        var sourceBuffer = audioContext.createBufferSource();
        // Tell the AudioBufferSourceNode to use this AudioBuffer
        sourceBuffer.buffer = audioBuffer;
        // Link nodes together in order to send the sound to our speakers
        sourceBuffer.connect(audioContext.destination);
        // Tell the AudioBufferSourceNode to play at this very moment in time
        sourceBuffer.start(audioContext.currentTime);
    })
};

request.send();









// end
}