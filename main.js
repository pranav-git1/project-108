Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + data_uri + '"/>';
    });
}
console.log('ml5 version : ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MGweAZSjF/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (result) {
        document.getElementById("result_of_results").innerHTML = results;
        if (results[0].label == "amazing") {
            console.log("amazing");
        }

        if (results[0].label == "victory") {
            console.log("victory");
        }

        if (results[0].label == "thumbs-up") {
            console.log("thumbs-up");
        }

    }
}