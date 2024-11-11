<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "ffs_db";

    try {
        
        $conexion = new PDO("mysql:host=$servidor;dbname=$bd", $usuario, $clave);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conexion->exec("SET CHARACTER SET utf8");
        
    } catch(Exception $e) {
        echo $sql . "<br>" . $e->getMessage();
    }

?>