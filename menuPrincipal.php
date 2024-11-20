<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="javascript/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="css/estilo.css">
    <script src="javascript/menuscripts.js"></script>
    
    
    <?php
    include("conexionBD.php");
        $usuActual=$_COOKIE['nUsuario'];
        $imgUser="vacío";
        $mailUser="Vacío";
        $puntuacion00="Vacío";
        $puntuacion01="Vacío";
        $puntuacion02="Vacío";
        $sqlLogeo="SELECT * FROM `usuarios` WHERE `nombreUsuario`='".$usuActual."'";

        $resultadoLogin = $conexion->query($sqlLogeo);
        while( $fila = $resultadoLogin->fetch() ) {
            $imgUser= $fila['imagenUsuario'];
            $mailUser=$fila['mail'];
            $puntuacion00=$fila['puntuacion00'];
            $puntuacion01=$fila['puntuacion01'];
            $puntuacion02=$fila['puntuacion02'];
            
        }


echo('<center><b>debug</b><br>');
                echo("El usuario actual es...".$usuActual).'<br>';
                echo("El mail actual es...".$mailUser.'<br>');
                echo("La imagen actual es la numero...".$imgUser."</center>");

        echo('<script>
        let varJS1="'.$usuActual.'";
        let varJS2="'.$mailUser.'";
        let varJS3='.$imgUser.';
        let varJSp0='.$puntuacion00.';
        let varJSp1='.$puntuacion01.';
        let varJSp2='.$puntuacion02.';
        // window.alert(varJS1+varJS2+varJS3+varJSp0+varJSp1+varJSp2);
        </script>');
    ?>




</head>
<body>
    

<section class="cabezaMenu ">
    <div class="container degradado-azul2  roundEsquina1  ">
        <div class="row pt-3 pb-2 px-3 ">
            <div class="col-8 ">
                <div id="containerScroll">
                    <div id="textoScroll">Ultima hora, La RAE acepta el uso de la palabra cocretamente, cocretamente hablando</div>
                </div>
                    
            </div>
<!-- Modal de titulo -->
            <div class="col degradado-azul2 text-center rounded-1  " id=" tituloCancion">
                <b>Get psyched!</b>
            </div>
            
        </div>
    </div>
</section>



<section class="centralMenu ">
    <div class="container degradado-azulCentral">
        <div class="row horizontalMedio px-3 ">
<!-- Opciones laterales -->
            <div class="col-2   text-center p-0 ">

                <a href="JavaScript:cambiarModal(1)"> <div class="opciones opcion1Lat degradadoOpcionesLat">Niveles</div></a>
                <a href="JavaScript: modaldelusuario(varJS1,varJS2,varJS3,varJSp0, varJSp1, varJSp2)">  <div class="opciones opcion2Lat degradadoOpcionesLat">Jugador</div></a>
                <!-- <a href="JavaScript:cambiarModal(3) cambiarModalEspecificoInfo(varJSp0, varJSp1, varJSp2)">  <div class="opciones opcion3Lat degradadoOpcionesLat">Records</div></a> -->
                <a href="index.php"><div class="opciones opcion4Lat degradadoOpcionesLat">Salir</div></a>
                <a href="JavaScript:cambiarModal(4)">   <div class="opciones opcion5Lat degradadoOpcionesLat">Acerca de...</div></a>
                </div>
<!-- Modales de informacion -->
            <div class="col-6  bg-success-subtle "id="infoModal" >

        </div>
            <div class="col  bg-success" id="infoModalEspecifico">Tercera columna con info
                <img src="img/mato.gif" class="w-100" alt="" srcset="">
            </div>
        </div>

    </div>
</section>
<section class="fondo">
    <div class="container">
        <div class="row horizontalAbajo ">
            <div class="col-1 col degradado-azul1 roundEsquina4">
            <?php 
            echo ('<div class="pfp"><img src="img/'.$imgUser.'.gif" class="img-fluid" ></div>');
            ?>


            </div>
            <div class="col degradado-azul1  roundEsquina3 text-center pt-4">
               For Fun Sake!
            </div>
        </div>
    </div>
</section>




<a href="fase_pruebas.html">a las pruebas</a>







    <script src="css/bootstrap.bundle.min.js"></script>
</body>
</html>