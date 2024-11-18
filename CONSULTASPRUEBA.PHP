<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<?php
include("conexionBD.php");
$imgUser="vacío";
$mailUser="Vacío";


$sqlLogeo="SELECT * FROM `usuarios` WHERE `nombreUsuario`='osmel'";
$resultadoLogin = $conexion->query($sqlLogeo);
while( $fila = $resultadoLogin->fetch() ) {
    $img= $fila['imagenUsuario'];
    $mail=$fila['mail'];
    echo $img;
    echo $mail;
    $GLOBALS['imgUser']=$fila['imagenUsuario'];
    $GLOBALS['mailUser']==$fila['mail'];
}
echo'<br>';
echo $img;
echo $mail;



$sqlLogeo="SELECT * FROM `usuarios` WHERE `nombreUsuario`='osmel'";
$resultadoLogin = $conexion->query($sqlLogeo);
while( $fila = $resultadoLogin->fetch() ) {
    $img= $fila['imagenUsuario'];
    $mail=$fila['mail'];
    echo $img;
    echo $mail;
    $GLOBALS['imgUser']=$fila['imagenUsuario'];
    $GLOBALS['mailUser']==$fila['mail'];
}



?>

</head>
<body>
    
</body>
</html>