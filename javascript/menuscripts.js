// fetch("texto")
//     .then(r => r.text())
//     .then(text => {
//     document.getElementById("textoScroll").innerText=text.split("/n");
//     })
//     .catch((e) => console.error(e));

//¿como coño se lee un txt en JS?!

let contenidoMod=document.getElementById("infoModal");

function cambiarModal(idseccion){
    document.getElementById("infoModal").innerHTML="Esta es mi info sobre cada seccion!.Esta es la seccion numero "+idseccion+'<br><a href="JavaScript:cambiarModalEspecifico(1)">Clíckame para llamar al submodal</a>';
    // document.getElementById("infoModal").innerHTML+'<a href="JavaScript:cambiarModalEspecifico(1)">Clíckame para llamar al submodal</a>'
}
function cambiarModalEspecifico(idsubsecc){
    document.getElementById("infoModalEspecifico").innerHTML="Esta es mi info sobre cada canciones.Esta es la subseccion "+ idsubsecc;
}