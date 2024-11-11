<!DOCTYPE html>

<html lang="en">
<!-- "documentacion"
    https://docs.google.com/document/d/1SSwP-aSY3ZKSGV_Eb_vMhzYpgxcoyi4mlgunDp9MoHI/edit?usp=sharing -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/estilo.css">
    <?php
    include("conexionBD.php");
    // aqui van mis scripppts


    ?>
</head>

<body>
    <section class="index_hiro w-100">

        <div class="container-fluid ">
            <div class="row ">
                <div class=" hiroizq offset-1 col-lg-6">

                    <img class=" pt-5" src="img/ffs2.png">
                </div>

                <div class=" offset-1 col-lg-3 ">
                    <br>
                    <div class="cajita_login bg-primary-subtle rounded-3 text-center pt-3 pb-3">
                        <!-- form -->
                        <form action="index.php" method="get">
                            <div class="imagenFFS"><img src="img/FFSlogo.png" id="logoFFSPequeño" alt="" srcset=""></div>

                            <div class="input-group mb-3 w-50 m-auto">
                                <i class="bi bi-person-badge-fill fs-3"></i>
                                <input type="text" class="form-control" name="usuario" placeholder=" USUARIO" aria-label="usrnm"
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3 w-50 m-auto fs-3">
                                <i class="bi bi-key-fill"></i>
                                <input type="text" class="form-control" name="contraseña" placeholder=" CONTRASEÑA" aria-label="passwd"
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="subcajitaIndex ">
                                <a href="" class="linksIndex mb-3">
                                    <p><i class="bi bi-send"></i> <input class="" type="submit" value="Iniciar sesión"></p>
                                </a>
                        </form>
                        <a href="" class="linksIndex mb-3">
                            <p><i class="bi bi-star-fill"></i> <a href="registro.php">NUEVA CUENTA</a></p>
                        </a>
                        <a href="" class="linksIndex ">
                            <p><i class="bi bi-x-octagon-fill"></i><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">OLVIDÉ MIS DATOS</a>  </p>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        </div>

    </section>


<?php
    
        if (!empty($_REQUEST["usuario"]) and (!empty($_REQUEST["contraseña"]))) {
            $nomLog=$_REQUEST["usuario"];
            $conLog=$_REQUEST["contraseña"];

                echo(" usuario->".$nomLog." <br>");
                echo(" pass->".$conLog." <br>");
                echo ("comprobar que el usuario existe<br>+-+-+-<br>");
                $sqlLogeo="SELECT `nombreUsuario`,passUsuario FROM `usuarios` WHERE `nombreUsuario`='".$nomLog."' AND `passUsuario`='".$conLog."'";
                $resultadoLogin = $conexion->query($sqlLogeo);
                if ($resultadoLogin->fetch()==true){
                    echo("usuario y pass correctas<br>");
                    echo("Procediendo a redirigir<br>");
                    header("Location: menuPrincipal.html", true, 307); exit; 
                }
            


            return true;
        } else {
            return false;
        };
    


?>








    <script src="css/bootstrap.bundle.min.js"></script>
</body>

</html>