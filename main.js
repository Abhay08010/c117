function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("confidence_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("confidence_label").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("result_label").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_label").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "dog.jpeg";
           
            document.getElementById("confidence_label").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "cat.jpeg";
           
            document.getElementById("confidence_label").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "lion.jpeg";
           
            document.getElementById("confidence_label").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
img.src = "cow.jpeg"          
            document.getElementById("confidence_label").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "default.png";
           
            document.getElementById("confidence_label").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}