function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9ur71yGvz/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        randomNumberR=Math.floor(Math.random()*255)+1;
        randomNumberG=Math.floor(Math.random()*255)+1;
        randomNumberB=Math.floor(Math.random()*255)+1;
        
        document.getElementById("result_label").innerHTML='Escucho - ' + results[0].label;
        document.getElementById("result_label").style.color="rgb(" + randomNumberR + "," + randomNumberG + "," + randomNumberB + ")";
      
        img=document.getElementById("Perro");
        img2=document.getElementById("Gato");
        img3=document.getElementById("Leon");
        img4=document.getElementById("Vaca");

        if(results[0].label=="Ladrido"){
            img.src='perro gif.gif';
            img2.src='gato.jpg';
            img3.src='lion.jpg';
            img4.src='vaca2.jpg';
        }
        else if(results[0].label=="maullado"){
            img.src='perro.jpg';
            img2.src='gato gif.gif';
            img3.src='lion.jpg';
            img4.src='vaca2.jpg';
        }
        else if(results[0].label=="Rujido"){
            img.src='perro.jpg';
            img2.src='gato.jpg';
            img3.src='lion-rawr.gif';
            img4.src='vaca2.jpg';
        }
        else{
            img.src='perro.jpg';
            img2.src='gato.jpg';
            img3.src='lion.jpg';
            img4.src='vaca.gif';
        }
    }
}