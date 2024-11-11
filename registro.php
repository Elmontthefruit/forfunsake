<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/estilo.css">
    <?php
    include("conexionBD.php");

    function vacios()
    {
        if (!empty($_REQUEST["usuario"]) and (!empty($_REQUEST["contraseña"])) and (!empty($_REQUEST["mail"]))) {
            // $nomLog=$_REQUEST["nombre"];
            // $conLog=$_REQUEST["contraseña"];
            // $nomLog=$_REQUEST["mail"];
            //     echo(" Mail->".$nomLog." <br>");
            //     echo(" usuario->".$conLog." <br>");
            //     echo(" pass->".$conLog." <br>");
            return true;
        } else {
            return false;
        };
    }
    function insertar($usuario,$pass,$mail){
        // INSERT INTO `usuarios`(`nombreUsuario`, `passUsuario`, `imagenUsuario`, `mail`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')
        $insertar="INSERT INTO `usuarios`(`nombreUsuario`, `passUsuario`, `imagenUsuario`, `mail`) VALUES ('".$usuario."','".$pass."','0','".$mail."')";
        //Ahora hay que hacer comprobaciones en la base de datos. Dios me asista
    }



    ?>
</head>

<body>
    <section>
        <nav class="reg_registro bg-primary-subtle vh-100 ">

            <div class="container bg-danger vh-100">
                <div class="row ">
                    <div class="inputs col-4 offset-1">
                        <div class="formulario ">
                            <img src="img/FFSlogo.png" alt="" srcset="">
                            <form action="registro.php" method="get">
                                <div class="input-group mb-3 w-50 m-auto pt-5">
                                    <i class="bi bi-person-badge-fill fs-3"></i>
                                    <input type="text" class="form-control" name="usuario" placeholder=" USUARIO" aria-label="usrnm"
                                        aria-describedby="basic-addon1">
                                </div>
                                <div class="input-group mb-3 w-50 m-auto fs-3">
                                    <i class="bi bi-envelope-at-fill fs-3 "> </i>
                                    <input type="text" class="form-control" name="mail" placeholder=" MAIL" aria-label="mail"
                                        aria-describedby="basic-addon1">
                                </div>
                                <div class="input-group mb-3 w-50 m-auto fs-3">
                                    <i class="bi bi-key-fill"></i>
                                    <input type="text" class="form-control" name="contraseña" placeholder=" CONTRASEÑA" aria-label="passwd"
                                        aria-describedby="basic-addon1">
                                </div>
                                <p class="text-center"><i class="bi bi-star-fill "></i> <input type="submit" value="Crear la cuenta"><i class="bi bi-star-fill "></i></p>
                            </form>
                        </div>

                        <p class="text-center fst-italic"><i class="bi bi-house"></i> <a href="index.html">Volver al inicio </a><i class="bi bi-house"></i></p>
                    </div>
                    <div class="col-4 ">
                        <img src="img/bumbumbum.png" alt="" srcset="">
                        <?php


                        $comprobador = vacios();
                        if (vacios() == true) {
                            $nomLog = $_REQUEST["usuario"];
                            $conLog = $_REQUEST["contraseña"];
                            $mailLog = $_REQUEST["mail"];
                            echo (" Mail->" . $mailLog . " <br>");
                            echo (" usuario->" . $nomLog . " <br>");
                            echo (" pass->" . $conLog . " <br>");
                            echo ("Datos recibidos! nwn");
                            insertar($nomLog,$conLog,$mailLog);
                            // SELECT `mail` FROM usuarios WHERE `mail` = 'algo';
                            
                            $sqlMail="SELECT `mail` FROM usuarios WHERE `mail` = '".$mailLog."'";
                            $resultadoMail = $conexion->query($sqlMail);
                            $sqlUser="SELECT `nombreUsuario` FROM usuarios WHERE `mail` = '".$nomLog."'";
                            $resultadoUser = $conexion->query($sqlUser);
                            $rowsMail = $resultadoMail->fetch();
                            $rowsUser = $resultadoUser->fetch();
                            if ( ! $rowsMail) {
                                echo("El correo no existe");
                            }
                            if ( ! $rowsUser) {
                                echo("El user no existe");
                            }
                            



                        } else {
                        }
                        ?>
                    </div>
                </div>
            </div>






        </nav>
    </section>











    <script src="css/bootstrap.bundle.min.js"></script>
</body>

</html>