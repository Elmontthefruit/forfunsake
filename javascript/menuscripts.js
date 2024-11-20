

let contenidoMod=document.getElementById("infoModal");

let cancion1=' <div class="itemcancion d-flex m-auto"><img src="img/bomato.gif" class="imgitemcancion pe-5 "><div class="infoitemscancion pt-2"><span class="titulocancion">¡A escala! <br></span><span class="tituloAlbum ps-1">Rythm Paradise<br></span><span class="dificultadcancion ps-2" ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></span></div></div>';
let cancion2=' <div class="itemcancion d-flex m-auto"><img src="img/bomato.gif" class="imgitemcancion pe-5 "><div class="infoitemscancion pt-2"><span class="titulocancion">Tweet and meet <br></span><span class="tituloAlbum ps-1">Bits & Bops<br></span><span class="dificultadcancion ps-2" ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></span></div></div>';
function modaldelusuario(nUsuarioJs,mailUsuarioJs,imagenUsuarioJS,varJp0, varJp1, varJp2){
    
    // let textomodal2='<div><center><img class="imgPerfilUsuario" src="img/'+imagenUsuarioJS+'.gif" alt=""><br><b>nombre de usuario->'+nUsuarioJs+'</b><br>Mail del usuario->'+mailUsuarioJs+'<br>cambiar imagen <form action="menuPrincipal.php" method="get">  <input type="radio" id="html" name="imgPerfilHtml" value="0"> <label for="img00"> <img class="imgPerfilUsuario" src="img/0.gif" alt=""></label>(0)<br> <input type="radio" id="css" name="img_perf" value="1">  <label for="img01"> <img class="imgPerfilUsuario" src="img/1.gif" alt=""></label>(1)<br>  <input type="radio" id="javascript" name="fav_language" value="2">  <label for="img02"> <img class="imgPerfilUsuario" src="img/2.gif" alt="">(2)</label><br><input type="submit" value="Submit"></form></center></div>'
    let textomodal2='<div><center><img class="imgPerfilUsuario" src="img/'+imagenUsuarioJS+'.gif" alt=""><br><b>nombre de usuario->'+nUsuarioJs+'</b><br>Mail del usuario->'+mailUsuarioJs+'<br>cambiar imagen </center></div>'

    document.getElementById("infoModal").innerHTML= textomodal2;
    cambiarModalEspecificoInfo(varJp0, varJp1, varJp2);
}

function cambiarModal(idseccion){
    if (idseccion==1) {
        cambiarModalEspecifico();
        document.getElementById("infoModal").innerHTML='<a href="JavaScript:cambiarModalEspecifico(1)">'+cancion1+ '</a><br><a href="JavaScript:cambiarModalEspecifico(2)">'+cancion2+ '</a>';
        
        
    } else if(idseccion==2) {
        cambiarModalEspecifico();
        modaldelusuario(nUsuarioJs,mailUsuarioJs,imagenUsuarioJS);
        // document.getElementById("infoModal").innerHTML= '<a href="JavaScript:cambiarModalEspecifico(2)">polla </a>';
    } else if(idseccion==3){
        cambiarModalEspecifico();
    }
    else if(idseccion==4){
        cambiarModalEspecifico();
    }
    else{


    document.getElementById("infoModal").innerHTML="Esta es mi info sobre cada seccion!.Esta es la seccion numero "+idseccion+'<br><a href="JavaScript:cambiarModalEspecifico(1)">Clíckame para llamar al submodal</a>';
    // document.getElementById("infoModal").innerHTML+'<a href="JavaScript:cambiarModalEspecifico(1)">Clíckame para llamar al submodal</a>'
}
}
function cambiarModalEspecificoInfo(p1,p2,p3){

    document.getElementById("infoModalEspecifico").innerHTML='<div class="itemcancion d-flex m-auto"><img src="img/bomato.gif" class="imgitemcancion pe-5 "><div class="infoitemscancion pt-2"><span class="titulocancion">¡A escala! <br></span><span class="tituloAlbum ps-1">Rythm Paradise<br></span><span class="dificultadcancion ps-2"><b>Puntuación máxima-></b> '+p1+'</div></div> <div class="itemcancion d-flex m-auto"><img src="img/bomato.gif" class="imgitemcancion pe-5 "><div class="infoitemscancion pt-2"><span class="titulocancion">Proximamente<br></span><span class="tituloAlbum ps-1">próximamente<br></span><span class="dificultadcancion ps-2"><b>Puntuación máxima-></b> '+p2+'</div></div><div class="itemcancion d-flex m-auto">';

}

// function cambiarModalEspecifico(idsubsecc){
//     document.getElementById("infoModalEspecifico").innerHTML="Esta es mi info sobre cada canciones.Esta es la subseccion "+ idsubsecc;
// }

function cambiarModalEspecifico(idsubsecc){
    
    let texto1='<center><span><b>A escala</b><br><img src="img/0.gif" alt="" srcset=""><br><p>Una canción para empezar. Prácticamente una sola escala. Cuenta con muchos fans online y una version "kaizo"</p><button class="opciones btn btn-danger"><a href="a_escala.php"> FFS! >:)</a></button></span></center>'
    let texto2='<center><span><b> Meet and Tweet</b><br><img src="img/0.gif" alt="" srcset=""><br><p>Va de un pollo salchicho gordo bachicho que hace pio pio...técnicamente es un canario así qu-OH DIOS ME HAN HECHO UNA CANCIÓN *W*</p><button class="opciones btn btn-danger"><a href="404.html"> FFS! >:)</a></button></span></center>'
    
    
    
    if (idsubsecc==1){
        document.getElementById("infoModalEspecifico").innerHTML=texto1;

    }
    else{

        document.getElementById("infoModalEspecifico").innerHTML= texto2; 
    }


}