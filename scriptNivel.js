

//Puntuacion de la fase
let puntuacion = 0;
//Supongo que un comprobador de si el pulsar es correcto o no
let correcto=false;

//array de tiempos de alerta
let indexT=0;
let tiempoAlerta=["00:05","00:10","00:15","00:19","00:22","00:25","00:30","00:35","00:40","00:42","00:49","00:51","00:53","00:55","00:57","00:57","00:57","00:57","00:57","00:57","00:57","00:57","00:57","01:20","01:20","01:20","01:20","01:20","01:20","01:20","01:34",]
let tiempoAccion=["00:07","00:12","00:17","00:21","00:23","00:26","00:32","00:36","00:41","00:42","00:50","00:51","00:52","00:55","00:58","01:00","01:01","01:02","01:05","01:09","01:12","01:14","01:16","01:21","01:24","01:25","01:26","01:28","01:30","01:34"]
let tiempoFin= "1:38";
let longAlerta= tiempoAlerta.length;
let longAccion= tiempoAccion.length;
//debug longitudes arrays
// alert (longAlerta);





var audioNivel = new Audio();
audioNivel.src = "audio/aEscala.mp3";
audioNivel.preload = 'auto';


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
    audioNivel.onended = function(){alert="El nivel ha terminado! Tu puntuación es de "+puntuacion;};
    if (tiempoAccion[indexT]==tiempoenVar){
        $("#bton-1").addClass("dale");
        indexT=indexT+1;
        correcto=true;


    }else{
        correcto=false;
        $("#bton-1").removeClass("dale");


    }
    // document.getElementById('puntitos').innerText = tiempoenVar;

}, 1000);
// Osmel! puede que elk truco para añadir milisegundos sea una variable mas y toqwuetear con el tiempo de aqui arriba!



}


function pulsaBoton() {

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
document.getElementById('metemeaqui').innerText = "<td>"+tiempoenmins+":"+tiempoensecs+"</td>";


}




// El puto timing
// https://www.w3schools.com/tags/av_event_timeupdate.asp

