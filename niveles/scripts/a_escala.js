


let puntuacion = 0;

let correcto=false;


let indexT=0;

let tiempoAccion=["00:14","00:25","00:33","00:42","00:46","00:52","01:03","01:11","01:21","01:24","01:38","01:42","01:45","01:48","01:52","01:56","01:59","02:02","02:06","02:14","02:20","02:27","02:30","02:38","02:41","02:46","02:49","02:52","02:56","02:59","03:07"]
let tiempoFin= "03:10";




function hastaHuevor() {
let puntuacionfinal=puntuacion/indexT
puntuacionfinal.toFixed(2);
if (puntuacionfinal<=0){ puntuacionfinal="0%; Pero si lo has hecho fatal! "} else {puntuacionfinal=(puntuacionfinal*100).toFixed(2)}


    let text = "Fin del nivel! Tu puntiación es del..."+puntuacionfinal+"% Pulsa 'aceptar' para volver al menu o 'cancelar' para reintentar.";
    if (confirm(text) == true) {
        window.location.href = 'menuPrincipal.php?maxScore='+puntuacionfinal+'&nivel=puntuacion00';
    } else {
        location.reload();
    }
    document.getElementById("demoAlerta").innerHTML = text;
}


var audioNivel = new Audio();
audioNivel.src = "audio/aEscala.mp3";
audioNivel.preload = 'auto';
let tiempo=0;


function playAudio() {

    let  = document.getElementById("audioCancion");
    audioNivel.play();

    document.getElementById("btnStart").remove();
    document.getElementById("coljuego").innerHTML='<button  class="btn" id="bton-1"  onclick="pulsaBoton()">clickame!</button>';
    document.getElementById("animacionJuego").innerHTML='<img src="img/helltaker-static.gif" class="fever">';



//contador de tiempo 
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    let tiempoenVar= document.getElementById("minutes").innerText+':'+document.getElementById("seconds").innerText;
    if (tiempoAccion[indexT]==tiempoenVar){
        $("#bton-1").addClass("dale");
        indexT=indexT+1;
        correcto=true;

    }else if(tiempoenVar>=tiempoFin){

        alert(hastaHuevor());

    }else{
            document.getElementById("animacionJuego").innerHTML='<img src="img/helltaker-static.gif" class="fever">'
        correcto=false;
        $("#bton-1").removeClass("dale");
    


    }

    // document.getElementById('puntitos').innerText = tiempoenVar+"--"+tiempoFin;

}, 500);




}


function pulsaBoton() {

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

}




function dametiempos(){
let tiempoensecs= document.getElementById("seconds").innerText;
let tiempoenmins=document.getElementById("minutes").innerText;
document.getElementById('metemeaqui').innerHTML += "<p>"+tiempoenmins+":"+tiempoensecs+"--"+tiempoAccion[indexT-1]+"---"+indexT+"</p>";

}





