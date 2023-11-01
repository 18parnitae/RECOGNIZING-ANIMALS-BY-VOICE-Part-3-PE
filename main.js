function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iNK9Lo0qw/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal1');
        img1 = document.getElementById('animal2');
        img2 = document.getElementById('animal3');
        img3 = document.getElementById('animal4');

        if (results[0].label == "Barking") {
            img.src = 'animation-ear.jpeg';
            img1.src = 'barking-dog.gif';
            img2.src = 'cute-black-cat.jpeg';
            img3.src = 'cute-croaking-frog.jpeg';
            img4.src = 'cute-whistling-dolphin.jpeg';
        } else if (results[0].label == "Meowing") {
            img.src = 'animation-ear.jpeg';
            img1.src = 'barking-dog.jpeg';
            img2.src = 'cute-black-cat.gif';
            img3.src = 'cute-croaking-frog.jpeg';
            img4.src = 'cute-whistling-dolphin.jpeg';
        } else if (results[0].label == "Croaking") {
            img.src = 'animation-ear.jpeg';
            img1.src = 'barking-dog.jpeg';
            img2.src = 'cute-black-cat.jpeg';
            img3.src = 'cute-croaking-frog.gif';
            img4.src = 'cute-whistling-dolphin.jpeg';
        } else if (results[0].label == "Whistling") {
            img.src = 'animation-ear.jpeg';
            img1.src = 'barking-dog.jpeg';
            img2.src = 'cute-black-cat.jpeg';
            img3.src = 'cute-croaking-frog.jpeg';
            img4.src = 'cute-whistling-dolphin.gif';
        } else{
            img.src = 'animation-ear.gif';
            img1.src = 'barking-dog.jpeg';
            img2.src = 'cute-black-cat.jpeg';
            img3.src = 'cute-croaking-frog.jpeg';
            img4.src = 'cute-whistling-dolphin.jpeg';
        }
    }
}