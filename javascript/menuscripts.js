// fetch("texto")
//     .then(r => r.text())
//     .then(text => {
//     document.getElementById("textoScroll").innerText=text.split("/n");
//     })
//     .catch((e) => console.error(e));

//¿como coño se lee un txt en JS?!

let contenidoMod=document.getElementById("infoModal");

let cancion1=' <div class="itemcancion d-flex m-auto"><img src="img/bomato.gif" class="imgitemcancion pe-5 "><div class="infoitemscancion pt-2"><span class="titulocancion">¡A escala! <br></span><span class="tituloAlbum ps-1">Rythm Paradise<br></span><span class="dificultadcancion ps-2" ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></span></div></div>';


function cambiarModal(idseccion){
    if (idseccion==1) {
        document.getElementById("infoModal").innerHTML='<a href="JavaScript:cambiarModalEspecifico(1)">'+cancion1+ '</a>';
        
    } else if(idseccion==2) {
        
    } else if(idseccion==3){
        
    }
    else if(idseccion==4){}
    else{


    document.getElementById("infoModal").innerHTML="Esta es mi info sobre cada seccion!.Esta es la seccion numero "+idseccion+'<br><a href="JavaScript:cambiarModalEspecifico(1)">Clíckame para llamar al submodal</a>';
    // document.getElementById("infoModal").innerHTML+'<a href="JavaScript:cambiarModalEspecifico(1)">Clíckame para llamar al submodal</a>'
}
}
function cambiarModalEspecifico(idsubsecc){
    document.getElementById("infoModalEspecifico").innerHTML="Esta es mi info sobre cada canciones.Esta es la subseccion "+ idsubsecc;
}