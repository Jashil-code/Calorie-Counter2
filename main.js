Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",  // Fixed typo
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+ data_uri+'">';
    });
}

console.log('ML5 Version:',ml5.version);
//classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NDyEZcy2M/", model_load);
classifier = ml5.imageClassifier("https://cors-anywhere.herokuapp.com/https://teachablemachine.withgoogle.com/models/NDyEZcy2M/", model_load);
// classifier = ml5.imageClassifier("https://api.allorigins.win/raw?url=https://teachablemachine.withgoogle.com/models/NDyEZcy2M/", model_load);
// classifier = ml5.imageClassifier("https://api.allorigins.win/raw?url=https://teachablemachine.withgoogle.com/models/NDyEZcy2M/model.json", model_load);

function model_load(){
    console.log("The model is loaded...");  // Fixed grammar
}

function check(){
    var img = document.getElementById("capture_img");
    classifier.classify(img, gotResult);
    console.log("Checking");
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("pre1").innerHTML = results[0].label;
        document.getElementById("pre1").innerHTML = results[1].label;

        recognition1 = results[0].label;
        recognition2 = results[1].label;
        Speak();

        if (results[0].label == "Pizza"){
            document.getElementById("rec1").innerHTML = "Pizza"
            document.getElementById("pre1").innerHTML = "Cheese Pizza (1 slice): Approximately 250-300 calories.\nPepperoni Pizza (1 slice): Approximately 300-350 calories.\nVeggie Pizza (1 slice): Approximately 200-250 calories.\nVeggie Pizza (1 slice): Approximately 200-250 calories"
        } 
        else if (results[0].label == "Burger"){
            document.getElementById("rec1").innerHTML = "Burger"
            document.getElementById("pre1").innerHTML = "Regular Hamburger (fast food): Approximately 250 to 300 calories.\nCheeseburger: Approximately 300 to 400 calories.\nDouble Cheeseburger: Approximately 450 to 600 calories.\nBacon Burger: Approximately 500 to 700 calories.\nVegetarian Burger: Approximately 200 to 400 calories, depending on the ingredients."
        }
        else if (results[0].label == "Dosa"){
            document.getElementById("rec1").innerHTML = "Dosa"
            document.getElementById("pre1").innerHTML = "Type of dosa: Variants like masala dosa (filled with spiced potatoes) can contain around 250 to 300 calories or more, depending on the filling and preparation."
        }
        else if (results[0].label == "Samosa"){
            document.getElementById("rec1").innerHTML = "Samosa"
            document.getElementById("pre1").innerHTML = "A typical potato-filled samosa (about 100 grams) contains approximately 250 to 300 calories."
        }
        else if (results[0].label == "Pani Puri"){
            document.getElementById("rec1").innerHTML = "Pani Puri"
            document.getElementById("pre1").innerHTML = "A typically contains about 30 to 50 calories per panipuri (one piece)"
        }

        if (results[1].label == "Pizza"){
            document.getElementById("rec2").innerHTML = "Pizza"
            document.getElementById("pre2").innerHTML = "Cheese Pizza (1 slice): Approximately 250-300 calories.\nPepperoni Pizza (1 slice): Approximately 300-350 calories.\nVeggie Pizza (1 slice): Approximately 200-250 calories.\nVeggie Pizza (1 slice): Approximately 200-250 calories"
        }
        else if (results[1].label == "Burger"){
            document.getElementById("rec2").innerHTML = "Burger"
            document.getElementById("pre2").innerHTML = "Regular Hamburger (fast food): Approximately 250 to 300 calories.\nCheeseburger: Approximately 300 to 400 calories.\nDouble Cheeseburger: Approximately 450 to 600 calories.\nBacon Burger: Approximately 500 to 700 calories.\nVegetarian Burger: Approximately 200 to 400 calories, depending on the ingredients."

        }
        else if (results[1].label == "Dosa"){
            document.getElementById("rec2").innerHTML = "Dosa"
            document.getElementById("pre2").innerHTML = "Type of dosa: Variants like masala dosa (filled with spiced potatoes) can contain around 250 to 300 calories or more, depending on the filling and preparation."

        }
        else if (results[1].label == "Samosa"){
            document.getElementById("rec2").innerHTML = "Samosa"
            document.getElementById("pre2").innerHTML = "A typical potato-filled samosa (about 100 grams) contains approximately 250 to 300 calories."

        }
        else if (results[1].label == "Pani Puri"){
            document.getElementById("rec2").innerHTML = "Pani Puri"
            document.getElementById("pre2").innerHTML = "A typically contains about 30 to 50 calories per panipuri (one piece)"

        }
    }
}


var recognition1 = "";
var recognition2 = "";

function Speak(){
    var synth = window.speechSynthesis;
    var speakData1 = "The first recognition is " + recognition1;
    var speakData2 = "And the second recognition is " + recognition2;
    
    var utterThis = new SpeechSynthesisUtterance(speakData1 + " " + speakData2);
    synth.speak(utterThis);
}
