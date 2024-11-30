<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="./javascript/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="niveles/css/a_escala.css">
    <script src="niveles/scripts/a_escala.js"></script>

</head>
<body class="reg_registro ">
    
<center>
<section class="" id="infoCancion ">
   
<b>Puntuacion</b>

<div id="puntitos">0</div>

</section>

<!-- Aqui se empieza el nivel.OSMEL ACUERDATE DE PONER QUE EL BOTON DESAPAREZCA! -->
<div class="empezar ">


    <audio id="audioCancion">

    </audio>
    
    <button class="btn bg-warning" id="btnStart" onclick="playAudio()" >Play</button>
    <!-- debug -->
    <!-- <div class="visually-hidden"><span id="minutes"></span>:<span id="seconds"></span></div> -->
</div>
</center>

<section class="" id="juego">
<div class="container">
    <div class="row bg-success text-center">
        <div class="col-6 offset-2 bg-danger ">

            <div id="animacionJuego">
                Do re mi fa sol
            </div>
        </div>
        <div class="col-3 bg-warning"> 
            <div class="alerta"> <img class="fever" src="img/alert-icon.webp" alt="" srcset=""></div>
            <button  class="btn" id="bton-1"  onclick="pulsaBoton()">clickame!</button>
            <div class="bienomal"> <img class="ecsitono"  src="img/helltaker-success.gif" srcset="">
            </div>
            <div class="animacion"></div>
        </div>
        




    </div>
</div>

<p id="demoAlerta"></p>
</section>
<form action="about:blank" method="get"></form>
<?php 

?>

<script src="css/bootstrap.bundle.min.js"></script>
</body>
</html>