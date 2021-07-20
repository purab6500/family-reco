Webcam.set({
    width:350,
    height:300,
    image_format :'jepg',
    jpeg_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/un9iwztc1/model.json',modleLoaded);

function modleLoaded(){
    console.log("Modle loaded !");
}

function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("name").innerHTML = results[0].lable;
    document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}