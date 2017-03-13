document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {

runMainFlow();


function runMainFlow() {
    // Init variables
    var audioContext;
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new window.AudioContext();
    } catch(err) {
        alert('Web Audio API is not supported in this browser');
    }

    var buttonsNodeList = document.querySelectorAll('button[data-key-code]');

    var charSoundSet = {
        'A' : {
            buffer : null,
            soundUrl: 'sounds/boom.wav',
            keyCode: '65'
        },
        'S' : {
            buffer : null,
            soundUrl: 'sounds/clap.wav'
        },
        'D' : {
            buffer : null,
            soundUrl: 'sounds/hihat.wav'
        },
        'F' : {
            buffer : null,
            soundUrl: 'sounds/kick.wav'
        },
        'G' : {
            buffer : null,
            soundUrl: 'sounds/openhat.wav'
        },
        'H' : {
            buffer : null,
            soundUrl: 'sounds/ride.wav'
        },
        'J' : {
            buffer : null,
            soundUrl: 'sounds/snare.wav'
        },
        'K' : {
            buffer : null,
            soundUrl: 'sounds/tink.wav'
        },
        'L' : {
            buffer : null,
            soundUrl: 'sounds/tom.wav'
        }
    };

    // Init Events
    initEvents(charSoundSet, audioContext, buttonsNodeList);

    // Load all Sounds
    loadAllSounds(charSoundSet, audioContext);
}

function initEvents(charSoundSet, audioContext, buttonsNodeList) {
    // put variable to scope
    var charSoundSet = charSoundSet,
        audioContext = audioContext,
        buttonsNodeList = buttonsNodeList;

    document.addEventListener('keydown', function (event) {
        triggerTheButton(event.keyCode, charSoundSet, audioContext, buttonsNodeList);
    }, false);

    buttonsNodeList.forEach(function(element) {
        element.addEventListener('click', function (event) {
            triggerTheButton(this.dataset.keyCode, charSoundSet, audioContext, buttonsNodeList);
        }, false);
    });
}

function triggerTheButton(keyCode, charSoundSet, audioContext, buttonsNodeList) {
    buttonsNodeList.forEach(function (value, key, listObj, argument) {
        if (value.dataset.keyCode == keyCode) {
            var buttonCharacter = String.fromCharCode(keyCode),
                charObj = charSoundSet[buttonCharacter];
            if (charObj && charObj.buffer) {
                addTempClass(value, 'active', 100);
                playSound(charObj.buffer, audioContext);
            }
        }
    });
}


function addTempClass(element, className, keepTimePeriod) {
    if (!element) return;
    // put vars to scope of setTimeout
    var element = element,
        className = className;

    element.classList.add(className);
    setTimeout(function() {
        element.classList.remove(className);
    }, keepTimePeriod);
}

function loadAllSounds(charsObj, audioContext) {
    for (var key in charsObj) {
        loadSound(charsObj[key].soundUrl, charsObj[key], audioContext);
    }
}

function loadSound(url, bufferInstance, audioContext) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function () {
        audioContext.decodeAudioData(request.response, function (buffer) {
            bufferInstance.buffer = buffer;
        }, function(err) {
            console.log('request is failed');
        });
    }
    request.send();
}

function playSound(buffer, audioContext) {
    var source = audioContext.createBufferSource(); // create a sound source
    source.buffer = buffer; // tell the source which sound to play
    source.connect(audioContext.destination); // connect the source to the context's destination (the speakers)
    source.start(0); // play the source now
}

// end 'fnReady'
}