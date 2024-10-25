

//Puntuacion de la fase
let puntuacion = 0;
//Supongo que un comprobador de si el pulsar es correcto o no
let correcto=false;

//array de tiempos de alerta
let tiempoAlerta=["00:05","00:10","00:15","00:19","00:22","00:25","00:30","00:35","00:40","00:42","00:49","00:51","00:53","00:55","00:57","00:57","00:57","00:57","00:57","00:57","00:57","00:57","00:57","01:20","01:20","01:20","01:20","01:20","01:20","01:20","01:34",]
let tiempoAccion=["00:07","00:13","00:17","00:22","00:24","00:27","00:32","00:37","00:42","00:44","00:50","00:52","00:54","00:56","00:58","01:00","01:01","01:03","01:05","01:09","01:12","01:15","01:17","01:21","01:23","01:25","01:26","01:28","01:30","01:32","01:36",]
let longAlerta= tiempoAlerta.length;
let longAccion= tiempoAccion.length;
//debug longitudes arrays
// alert (longAlerta);








function playAudio() {
    // declara aqui la variable o esto se va a poner gilipollas
    let x = document.getElementById("audioCancion");
    x.play();
    // Una vez empieza el nivel, el botón de start desaparece
    document.getElementById("btnStart").remove();
    // info
    //https://www.w3schools.com/jsref/met_audio_play.asp
//DEBUG y si, está copiaoypegao de los internetes
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);



}


function pulsaBoton() {
    puntuacion = puntuacion + 1;
    document.getElementById('puntitos').innerText = puntuacion;
    document.getElementById("bton-1").addClass('dale');

    // document.getElementById("bton-1").disabled = true;
    // alert(puntuacion);
}
// function activaBoton(botonPulsable) {
//     document.getElementById(botonPulsable).disabled = false;

// }


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

