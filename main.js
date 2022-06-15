var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textBox").innerHTML = " ";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content)

    document.getElementById("textBox").innerHTML = Content;
    if (Content == "take my selfie" || Content == "take my picture" || Content == "take a pic of me") {  
        console.log("taking selfie");
        speak();
    }   
}

function speak() {
    var Synth = window.speechSynthesis;
    speak_data = "Taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function () {
        take_snapShot();
    }, 5000)
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapShot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie1" src = "' + data_uri + '">'
        document.getElementById("result1").innerHTML = '<img id="selfie2" src = "' + data_uri + '">'
        document.getElementById("result2").innerHTML = '<img id="selfie3" src = "' + data_uri + '">'
        save()
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie1").src;
    image1 = document.getElementById("selfie2").src;
    image2 = document.getElementById("selfie3").src;
    link.href = image;
    link.click();
}