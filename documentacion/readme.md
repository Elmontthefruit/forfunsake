# For Fun Sake (FFS)

### ***Ciclo formativo D.A.W. ***
**Autor del proyecto**: Osmel Navarro Montesdeoca 
**Tutor**:  
**Repositorio**:  


# Índice

1. [Introducción del proyecto](#introducción)
    - [Objetivos](#objetivos)
    - [Justificación del proyecto](#justificación-del-proyecto)
        - [Vinculación de contenidos vistos en el ciclo formativo](#vinculación-de-contenidos-vistos-en-el-ciclo-formativo)
2. [Recursos Utilizados](#2--recursos-utilizados)
    - [Entornos de desarrollo](#entornos-de-desarrollo)
    - [Lenguajes de programación](#lenguajes-de-programación)
    - [Utilidades](#utilidades)
3. [Tecnologías de Desarrollo](#3--tecnologías-de-desarrollo)
4. [Diseño del proyecto](#4--diseño-del-proyecto)
    - [Diseño de la base de datos](#diseño-de-la-base-de-datos)
    - [Carga de datos inicial](#carga-de-datos-inicial)
    - [Usuarios creados para pruebas](#usuarios-creados-para-pruebas)
5. [Lógica/codificación del proyecto](#5--lógicacodificación-del-proyecto)
    - [Principales procesos](#principales-procesos)
    - [Aspectos relevantes de la implementación](#aspectos-relevantes-de-la-implementación)

7. [Manual de usuario](#7--manual-de-usuario)
8. [Conclusiones](#8-conclusiones-y-posibles-mejoras)
9. [Bibliografía](#bibliografía)
10. [Agradecimientos](#agradecimientos)

<hr>

## 1.- Introducción del proyecto

FFS (For Fun Sake) es un videojuego de navegador construido en javascript y PHP. El nombre es a su vez un juego de palabras en inglés por sus iniciales (que suelen significar *For Fuck sake*).
El proyecto tiene como objetivo crear el juego sin usar un motor gráfico, solo las herramientas proporcionadas por javascript y PHP

### Objetivos

El objetivo es hacer un juego musical donde  se penalize al jugador por acciones indebidas y se le premie por su precisión.

- Los usuarios tendrán que hacerse una cuenta para poder jugar 

- Cada jugador podrá disponer de una imagen de perfil (seleccionable al crear la cuenta) y registro de records 

- La idea principal es permitir la reutilización de código, pasando ciertos argumentos como parámetros y así permitir la fácil creación de nuevos niveles

### Justificación del proyecto

Me gustan los juegos de ordenador.
Me gustan los juegos de música.


#### Vinculación de contenidos vistos en el ciclo formativo

-  **Lenguajes de programación**: 
        
    - **Backend**: PHP y SQL. Ambos desde Laragon 

    - **Frontend**: JS, CSS y HTML.

    - **Librerías y Frameworks**:  Bootstrap.

- **Gestión de Bases de Datos**

    - **Diseño de Base de Datos**: Modelo Entidad/relación

    - **SQL**: Necesario si quiero modificar datos en la base de datos
    
## 2.- Recursos utilizados

### Entornos de desarrollo

- **Visual Studio Code**: Editor gratuito con soporte para muchos plugins y lenguages de programación

- **Laragon**: Herramienta sustituta a XAMPP. Funciona mejor, más rápido, permite más opciones y no tiene la cantidad de problemas que la competencia

- **phpmyadmin**: Generalmente incluida en XAMPP, pero no en Laragon. Se instala aparte con una complicada operación de descarga, descompresión y colocación en la carpeta de Laragon

### Lenguajes de programación

Los diferentes lenguajes de programación utilizados para la creación de este proyecto han sido los siguientes:

- **HTML**: Necesario para poder construir las páginas web. Por así decirlo, el esqueleto de toda la estuctura

-**CSS**: Utilizado con la librería de bootstrap. Permite la personalización visual de elementos en HTML. Si HTML es el esqueleto, CSS es un bote de maquillaje

- **Javascript**: Lenguage de frontend utilizado para prácticamente todo el funcionamiento frontend

- **PHP**: Lenguage de backend utilizado en conjunto con SQL para la interacción con la base de datos

- **SQL**: Se utiliza en backend para trabajar directamente con la base de datos

### Utilidades
Además de estos lenguages y programas, se han requerido los siguientes:

- **GitHub**: Usado para control de versiones, almacenamiento en la nube, y botón de pánico cuando los errores son demasiado grandes

- **CSP (Clip Studio Paint)**: Utilizado para la edición de mapas de bits y arte del proyecto, además de algunas animaciones

- **MSPAINT**: A pesar de que pueda parecer una broma, no, este programa en su edición de windows 10 ha sido utilizada para crear ciertas ilustraciones.

- **Música**: La música del proyecto no es de cosecha propia, se ha ido consiguiendo de diferentes medios, especificados a su vez dentro del proyecto

## 3.- Tecnologías de Desarrollo

Las diferentes tecnologías utilizadas a lo largo del desarrollo del proyecto han sido las siguientes:

- **Frontend**: HTML,CSS, JS.

- **Backend**: PHP.

- **Base de datos**: MySQL.

## 4.- Diseño del proyecto


### Diseño de la Base de datos

- `Diagrama E/R`:

![Diagrama E/R](/documentacion/e-r.png)



### Carga de datos inicial

Los datos relacionados con los usuarios se almacenan en la base de datos, así que para inicializarlo se utiliza el archivo sql 


### Diseño de la interfaz de usuario

La interfaz de usuario se divide en 2 partes a las que internamente se le refiere como "XP" y "soso"

- *XP* hace referencia a la interfaz del menú principal, basada en los colores de windows XP y el reproductor de windows Media. Los colores y formas han intentado recrearse en cierta medida (tonos azulados, degradados, esquinas redondeadas...) 

- *Soso* hace referencia al resto de elementos más genéricos, más "sosos" en comparación a los otros elementos. En parte, algunos de estos elementos se refieren asípara aliviar la carga de elementos más pesados (como música o animaciones en niveles)


### Usuarios creados para pruebas

Para las pruebas se han creado varios usuarios. Realmente las operaciones con los usuarios no son muy complejas. Casi todas las pruebas se han realizado con un usuario llamado "*Osmel*" y otro llamado "*Néstor*". La contraseña de ambos, por mantener la simplicidad de la base de datos, es *1234*. Obviamente, nuevos usuarios pueden ser creados para nuevos jugadores

## 5.- Lógica/codificación del proyecto

### Principales procesos


- **Creación de usuarios**: No puede accederse al juego sin un usuario. Una página del proyecto está dedicada a la creación de cuentas nuevas. Se le pedirá al usuario un correo electrónico, un nombre de usuario, una ontraseña y una imagen de perfil de las disponibles. La creación de usuarios además comprueba que ni el correo ni el nomrbe de usuari ya estén en uso

- **Autenticación**: El *index* es la página de login. Pide al usuario un nombre de usuario y una contraseña para acceder.No se necesita el correo para ello, el correo solo es necesario para la creación de nuevas cuentas

- **Carga de información**: Al acceder al menu principal, se cargan ciertos datos de la base de datos para mostrarlos en pantalla (Nombre de usuario, correo, que imágen usa, records...)

- **Información de niveles**: Se muestra información sobre niveles jugables

- **Fase**: Se refiere al conjunto de funciones y scripts que permiten ejecutar un nivel

### Aspectos relevantes de la implementación

- **Validación de creación de usuarios**: La validación toma como clave primaria correos electrónicos. A pesar de que parezca un poco absurdo, la idea es que si se llegase a desplegar este juego en la web, este sistema haría más complicado acaparar todos los nombres al pedir un coreo electrónico por nombre de usuario. El script comprobará que no exista el mail, el nombre de usuario, que la contraseña y los datos aneriores existan (la imagen de perfil viene con la opción 1 preseleccionada) y si todo está correcto, creará un usuario nuevo

- **Login**: El login es sencillo. Recoge el nombre de usuario y la contraseña y pregunta  ala base de datos si esa cobinación de datos existe. En aso afirmativo, el usuario con dicha contraseña existe, así que te redirige al menú principal con esos datos

- **Sistema de tempo**: El funcionamiento base de los niveles consiste en un contador de tiempo invisible al jugador. 
Dicho contador de tiempo puede ser ajustado a conveniencia de cada fase.
 Actualmente recibe (en la fase implementada) un array con tiempos, procesándolo cada medio segundo (500ms).
  Cada medio segundo, se comprueba que se haya clickado o no en el botón cuando coincida el contador de tiempo. Si coincide la marca de tiempo con el array y la posición adecuada, se añade 1 punnto al contador. Si no coincide, se resta un punto.
  La omisión de pulsación no conlleva penalización

- **Sistema de carpetas**: 
```
ForFunSake
├───audio
│
├───CSS
│
├───DOCUMENTACION
│   ├───IMG 
│   └───Manual
├───img
│
├───javascript
│
├───mysql-8
│
├───Niveles
```

- **aForFunSake**: Raiz del proyecto.
    - **Audio**: Audios del proyecto. Actualmente solo incluye el tema del nivel jugable.
    - **Css**: Archivos de CSS y bvootstrap en general.
    - **Documentación**: La documentación del proyecto y el manual de usuario.
    - **img**: Imágenes del proyecto.
    - **javascript**: Scripts generales del proyecto y clases.
    - **mysql-8**: La base de datos
    - **Niveles**: Archivos CSS y scripts exclusivos a los niveles jugables.



## 6.- Manual de usuario
El manual de usuario, para hacerlo más acorde al proyecto, se presenta a continuación
 como un archivo separado, imitando el estilo de un manual de un videojuego

Link al manual de usuario: [ Manual de usuario](anexo%20II/README.md)

## 7.-Conclusiones y posibles mejoras

- **Conclusiones**: Crear est proyecto me ha permitido darme cuenta de lo horriblemente lento que he ido en este curso y de la increíble adversión que presento a CSS y PHP. Además de que he descubierto Laragon y lo usaré a partir de ahora en lugar de XAMPP

- **Aspectos a mejorar**: A causa de problemas personales e incomunicación con el profesorado, el proyecto no es tan largo cmo me hubiese gustado. A continuación, una lista de cosas que considero deberían editarse o mejorarse

    - **Más niveles**: La base para la reación de niveles ya está creada. El sistema es muy sencillo y hay incluso una pequeña herramienta de desarrollo, pero la idea es que haya más niveles

    - **Cifrado en contraseñas**: La comprobación y almacenamiento de estos datos está en texto plano, sin seguridad. Sería ideal cifrarlo y añadir seguridad

    - **Mejora del sistema de niveles**: Actualmente Se necesita un JS y un HTML por nivel. La ide aprincipal era adaptar las funciones para que reciban como parámetros (desde la base de datos) el tempo del nivel y el array de aciertos.
     Bien no sería necesario que se almacenase en la base de datos, ya que podría pasarse de otra manera, sería un dato interesante; Oytra mejora sería añadir un sistema de "alerta", donde una comprobación visual (como una exclamación o simbolo de alerta) avise al usuario sobre la necesidad de pulsar en breve.
     La implementación sería con un segundo comprobador en la función principal y un segundo array con tiempos


    - **Mejoras de diseño**: Para disminuir la carga en ciertas partes, las animaciones se han mantenido al mínimo. Con más tiempo posiblemente podría llegarse a un equilibrio entre rendimiento y animaciones

    - **Edición de datos de los usuarios**: En el proyecto original se pretendía que el usuario pudiese cambiar de imagen de usuario a voluntad de entre las preestablecidas en la sección  con los datos de este

## Bibliografía

Los recursos más importantes utilizados han sido los siguientes:

- **Bootstrap**: [Página oficial de Bootrstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

- **Scroll de texto**: [Hubspot](https://blog.hubspot.com/website/scrolling-text-css) 

- **Formularios varios PHP**: [StackOverFlow](https://stackoverflow.com/)

- **Contadores de tiempo**: [W3schools](https://www.w3schools.com/tags/av_event_timeupdate.asp)

- **Fuente de imágenes y audio**: 
    - **KGraffiti**: [2 graffitis han sido extraidos de la siguiente Web](https://www.graffiti-empire.com/graffiti-generator/)
    - **Audio**: [Link a youtube](https://www.youtube.com/watch?v=Fx2hJHWLoaI)


## Agradecimientos
- A verónica por ayudarme con PHP
- A Nick Von Leuween por hacerme un Elmont bailarín
- A Lupi por traducirme un texto
- A Néstor, que no me ha ayudado en absolutamente nada pero le debo 10 euros y me los perdona si lo incluyo