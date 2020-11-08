var speech = new SpeechSynthesisUtterance();

function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;

    // let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = msg;
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function pauseAudio() {
    window.speechSynthesis.pause();
}

function resumeAudio() {
    window.speechSynthesis.resume();
}

function cancelAudio() {
    window.speechSynthesis.cancel();
}

if (annyang) {
    // Add our commands to annyang
    annyang.addCommands({
        'hello': function () { alert('Hello world!'); },
        'start reading': textToAudio,
        'pause reading': pauseAudio,
        'resume reading': resumeAudio,
        'stop reading': cancelAudio,
    });

    // Start listening. You can call this here, or attach this call to an event, button, etc.
}

function speakcommand() {
    annyang.start();
}

// const commands = {
//     // annyang will capture anything after a splat (*) and pass it to the function.
//     // e.g. saying "Show me Batman and Robin" will call showFlickr('Batman and Robin');
//     'show me *tag': showFlickr,

//     // A named variable is a one-word variable, that can fit anywhere in your command.
//     // e.g. saying "calculate October stats" will call calculateStats('October');
//     'calculate :month stats': calculateStats,

//     // By defining a part of the following command as optional, annyang will respond
//     // to both: "say hello to my little friend" as well as "say hello friend"
//     'say hello (to my little) friend': greeting
//   };

// var showFlickr = function (tag) {
//     var url = 'http://api.flickr.com/services/rest/?tags=' + tag;
//     $.getJSON(url);
// }

// var calculateStats = function (month) {
//     $('#stats').text('Statistics for ' + month);
// }

// var greeting = function () {
//     $('#greeting').text('Hello!');
// }
