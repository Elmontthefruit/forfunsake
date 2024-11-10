

//Puntuacion de la fase
let puntuacion = 0;
//Supongo que un comprobador de si el pulsar es correcto o no
let correcto=false;

//array de tiempos de alerta
let indexT=0;

let tiempoAccion=["00:14","00:25","00:33","00:43","00:46","00:52","01:03","01:12","01:21","01:24","01:39","01:43","01:46","01:49","01:53","01:57","02:00","02:02","02:07","02:15","02:21","02:28","02:30","02:39","02:42","02:47","02:49","02:53","02:57","03:00","03:08"]
let tiempoFin= "03:10";

// let longAccion= tiempoAccion.length;
//debug longitudes arrays
// alert (longAlerta);


//Intento de funcion que pare el nivel
//se ejecuta dentro de un alert. Podría tener el alert dentro...creo, pero como va bien...
//Hay que añadir que actualice las puntuaciones más adelante
function hastaHuevor() {
let puntuacionfinal=puntuacion/indexT
puntuacionfinal.toFixed(2);
if (puntuacionfinal<=0){ puntuacionfinal="0%; Pero si lo has hecho fatal! "} else {puntuacionfinal=(puntuacionfinal*100).toFixed(2)+"%"}
    let text = "Fin del nivel! Tu puntiación es del..."+puntuacionfinal+" Pulsa 'aceptar' para volver al menu o 'cancelar' para reintentar.";
    if (confirm(text) == true) {
        window.location.href = 'menuPrincipal.html';
    } else {
        window.location.href = 'fase_pruebas.html';;
    }
    document.getElementById("demoAlerta").innerHTML = text;
}


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
    //añadido un gif normal
    document.getElementById("animacionJuego").innerHTML='<img src="img/helltaker-static.gif" class="fever">';



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

    }else if(tiempoenVar>=tiempoFin){
        //Tiene que haber alerta!
        alert(hastaHuevor());

    }else{
            document.getElementById("animacionJuego").innerHTML='<img src="img/helltaker-static.gif" class="fever">'
        correcto=false;
        $("#bton-1").removeClass("dale");
    


    }

    document.getElementById('puntitos').innerText = tiempoenVar+"--"+tiempoFin;

}, 500);
// Recuerda que esto se ejecuta cada medio segundo!



}


function pulsaBoton() {
//debug
    // dametiempos();
        if (correcto==true){
        puntuacion = puntuacion + 1;
        correcto= false;
        $("#bton-1").removeClass("dale");
        document.getElementById("animacionJuego").innerHTML='<img src="img/helltaker-success.gif" class="fever">';

    } else {
            puntuacion=puntuacion-1
            document.getElementById("animacionJuego").innerHTML='<img src="img/error.png" class="fever">'
        }
        document.getElementById('puntitos').innerText = puntuacion;  
    //OJO CON ESTE TIPO DE MANERA DE TRABAJAR!!
    // variable= document.getElementById("bton-1")
    // $("#bton-1").addClass("dale")

}


//extraer tiempo del contador. Esto es debug

function dametiempos(){
let tiempoensecs= document.getElementById("seconds").innerText;
let tiempoenmins=document.getElementById("minutes").innerText;
//Creo que la alerta para el contador! No uses alertas. Detienen el contador de tiempo pero no la musica
//alert(tiempoenmins+'minutos y '+tiempoensecs+' segundos');
document.getElementById('metemeaqui').innerHTML += "<p>"+tiempoenmins+":"+tiempoensecs+"--"+tiempoAccion[indexT-1]+"---"+indexT+"</p>";


}




// El puto timing
// https://www.w3schools.com/tags/av_event_timeupdate.asp

