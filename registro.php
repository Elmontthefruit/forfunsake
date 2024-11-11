<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/estilo.css">
    <?php ; 

if (!empty($_REQUEST["nombre"])){$nomLog=$_REQUEST["nombre"];};
if (!empty($_REQUEST["contraseña"])){$conLog=$_REQUEST["contraseña"];};
if (!empty($_REQUEST["mail"])){$nomLog=$_REQUEST["mail"];};
                

echo(" Mail->".$nomLog." <br>");
echo(" usuario->".$conLog." <br>");
echo(" pass->".$conLog." <br>");


    
    
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
                <p class="text-center"><i class="bi bi-star-fill "></i>  <input type="submit" value="Crear la cuenta"><i class="bi bi-star-fill "></i></p>
                </form>
            </div>
        
            <p class="text-center fst-italic"><i class="bi bi-house"></i> <a href="index.html">Volver al inicio </a><i class="bi bi-house"></i></p>
        </div>
        <div class="col-4 ">
            <img src="img/bumbumbum.png" alt="" srcset="">
        </div>
    </div>
</div>

            




        </nav>
    </section>











    <script src="css/bootstrap.bundle.min.js"></script>
</body>

</html>