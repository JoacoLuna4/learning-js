//INTENTO DE FORMULARIO FALLIDO


var vp = document.getElementById("villaplatzi");
var lienzo = vp.getContext("2d");
var movimiento = 10;                                // MOVIMIENTO DEL LOBO

// Variables de imagenes
var fondo ={                                        //OBJETO LITERAL (Objeto que contiene varios objetos)
    url: "assets/tile.webp",
    carga: false
}
var vaca ={                                         //OBJETO LITERAL (Objeto que contiene varios objetos)
    url: "assets/vaca.png",
    carga: false                                    //"Carga" inicia en False - 
}
var cerdo={
    url: "assets/cerdo.webp",
    carga: false
}
var pollo={
    url: "assets/pollo.webp",
    carga: false
}
// var lobo={
//     url: "assets/lobo.png",
//     carga: false
// }

// VARIABLE QUE ALMACENA VALOR DE FLECHAS
var flechas = {                                     
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};


document.addEventListener("keydown", oprimirTecla); // Escuchador de teclado en el documento, cuando haya una "keydown"
                                                    // ejecuta la funcion oprimirTecla()

// ------------------------------------------------------ CARGA DE IMAGENES EN ORDEN

fondo.objeto = new Image();                         // Se declara new Image aquí ya que en el objeto literal causa error de synth
fondo.objeto.src = fondo.url;                       
fondo.objeto.addEventListener("load", cargarFondo); // Una vez que el escuchador recibe a "load", inicia funcion cargarFondo

vaca.objeto = new Image();                          // Se declara la clase image a vaca.objeto = se le declara otra propiedad a la variable
vaca.objeto.src= vaca.url;                          // vaca que ahora se llama objeto, la cual es la que contiene la imagen en si.
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();                         // Lo mismo que anteriormente pero con los cerdos
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();                         // Lo mismo que anteriormente pero con los pollos
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener ("load", cargarPollo);

// lobo.objeto = new Image();                         // Lo mismo que anteriormente pero con los lobos
// lobo.objeto.src = lobo.url;
// lobo.objeto.addEventListener ("load", cargarLobo);

// Funciones que corroboran que la carga se efectue
function cargarFondo(){                           
    fondo.carga = true;                             // Cargar fondo pone en true a la propiedad "carga" del objeto fondo
    dibujar();                                      // Llama a la funcion dibujar
}
function cargarCerdos(){
    cerdo.carga = true;
    dibujar();
}
function cargarVacas(){
    vaca.carga = true;
    dibujar();
}
function cargarPollo(){
    pollo.carga = true;
    dibujar();
}
// function cargarLobo(){
//     lobo.carga = true;
//     dibujar();
// }
console.log(cerdo);



let send = document.getElementById("submit");   //Traemos el botón al js
send.addEventListener("click", dibujar);        //Ponemos un escuchador del botón, para que dispare la funcion dibujar
function dibujar(){   
    let vacasJs = document.getElementById("vacas-cantidad");
    let cerdosJs = document.getElementById("cerdos-cantidad");
    let pollosJs = document.getElementById("pollos-cantidad");
    let lobosJs = document.getElementById("lobos-cantidad");
    let vacas = vacasJs.value; 
    let cerdos = cerdosJs.value; 
    let pollos = pollosJs.value; 
    // let lobos = lobosJs.value; 

                                                 // Llama a la funcion aleatorio y le da el rango, permite darle valores random de X e Y para que aparezcan en distintos lugares
    if(fondo.carga == true){                     // Pregunta si el valor de "carga" esta en true para recien ahi dibujar la imagen en "lienzo" que es el contexto
        lienzo.drawImage(fondo.objeto, 0, 0);    // "2 d" de la variable vp del canvas con id "villaplatzi" del index.html
    }
    if(vaca.carga){
        for(i=0; i < vacas; i++){
            var x = aleatorio(0, 420);                   // El rango va entre 0 y 420 ya que el canvas tiene 500px y la vaca tiene 80px (el resultado de 500-80)
            var y = aleatorio(0, 420);
            lienzo.drawImage(vaca.objeto, x, y);
        }
    }
    if(cerdo.carga){                                  //Para evitar que se encimen tanto las imagenes puedo calcular que teniendo un ancho de 500px
        for(i=0; i<cerdos; i++){                           // y un ancho de imagenes de 80px 500/80= 6.25 , es decir que 6*80= 480
            var x = aleatorio(0,5);                       //es decir, que si yo genero un numero aleatorio entre 0 - 6 
            var y = aleatorio(0,5);                       // (se le hace de 0 - 5 para que no se salga de los limites)
            var x = x *80;                                //y lo multiplico *80 me va a dar mi límite.
            var y = y *80;
            lienzo.drawImage(cerdo.objeto, x, y);
        }
    }
    if(pollo.carga){
        for(i=0; i<pollos; i++){
            var x = aleatorio(0,5);                       
            var y = aleatorio(0,5);                       
            var x = x *80;                                
            var y = y *80;
            lienzo.drawImage(pollo.objeto, x, y);
        }    
    }
   
}

//FUNCION QUE MUEVE TECLAS
function oprimirTecla(evento){
    switch(evento.keyCode){
        case flechas.UP:
        moverLobo()
        ylobo = ylobo - movimiento;
        break;
        case flechas.DOWN:
        moverLobo()
        ylobo = ylobo + movimiento;
        break;
        case flechas.LEFT:
        moverLobo()
        xlobo = xlobo - movimiento;
        break;
        case flechas.RIGHT:
        moverLobo()
        xlobo = xlobo + movimiento;
        break;
        default:
        }
    }
    /////// ETAPA DE MOVIMIENTO DE LOBO CON FLECHAS /////////
var xlobo = 150;
var ylobo = 150;
function moverLobo(){                  
        lienzo.drawImage(lobo.objeto, xlobo, ylobo);   
}

function aleatorio(min, maxi){
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}