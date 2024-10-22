let puntuacion = 0;



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
    document.getElementById("bton-1").disabled = true;
    // alert(puntuacion);
}
function activaBoton(botonPulsable) {
    document.getElementById(botonPulsable).disabled = false;

}

// El puto timing
// https://www.w3schools.com/tags/av_event_timeupdate.asp

