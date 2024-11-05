

//Puntuacion de la fase
let puntuacion = 0;
//Supongo que un comprobador de si el pulsar es correcto o no
let correcto=false;

//array de tiempos de alerta
let indexT=0;

let tiempoAccion=["00:14","00:25","00:33","00:43","00:46","00:52","01:03","01:12","01:21","01:24","01:39","01:43","01:46","01:49","01:53","01:57","02:00","02:02","02:07","02:15","02:21","02:28","02:30","02:39","02:42","02:47","02:49","02:53","02:57","03:00","03:08"]
// let tiempoFin= "1:38";

// let longAccion= tiempoAccion.length;
//debug longitudes arrays
// alert (longAlerta);





var audioNivel = new Audio();
audioNivel.src = "audio/aEscala.mp3";
audioNivel.preload = 'auto';
let tiempo=0;


function playAudio() {
    // declara aqui la variable o esto se va a poner gilipollas
    let  = document.getElementById("audioCancion");
    audioNivel.play();
    // Una vez empieza el nivel, el botón de start desaparece
    document.getElementById("btnStart").remove();


//contador de tiempo 
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    let tiempoenVar= document.getElementById("minutes").innerText+':'+document.getElementById("seconds").innerText;
    // tiempo=pad(++sec%60);
    // document.getElementById("infoCancion").innerHTML=tiempo+"segundosx2";
    // audioNivel.onended = function(){alert="El nivel ha terminado! Tu puntuación es de "+puntuacion;};
    if (tiempoAccion[indexT]==tiempoenVar){
        $("#bton-1").addClass("dale");
        indexT=indexT+1;
        correcto=true;


    }else{
        correcto=false;
        $("#bton-1").removeClass("dale");


    }
    // document.getElementById('puntitos').innerText = tiempoenVar;

}, 500);
// Osmel! puede que elk truco para añadir milisegundos sea una variable mas y toqwuetear con el tiempo de aqui arriba!



}


function pulsaBoton() {
    dametiempos();
        if (correcto==true){
        puntuacion = puntuacion + 1;
        correcto= false;
        $("#bton-1").removeClass("dale");

    } else {
            puntuacion=puntuacion-1
        }
        document.getElementById('puntitos').innerText = puntuacion;
    //ignorame soy un debú
    // document.getElementById('puntitos').innerText = puntuacion+"__"+correcto+"__";
    
    //OJO CON ESTE TIPO DE MANERA DE TRABAJAR!!
    // variable= document.getElementById("bton-1")
    // $("#bton-1").addClass("dale")

}


//extraer tiempo del contador

function dametiempos(){
let tiempoensecs= document.getElementById("seconds").innerText;
let tiempoenmins=document.getElementById("minutes").innerText;
//Creo que lña alerta para el contador!
//alert(tiempoenmins+'minutos y '+tiempoensecs+' segundos');
document.getElementById('metemeaqui').innerHTML += "<p>"+tiempoenmins+":"+tiempoensecs+"--"+tiempoAccion[indexT-1]+"---"+indexT+"</p>";


}




// El puto timing
// https://www.w3schools.com/tags/av_event_timeupdate.asp

