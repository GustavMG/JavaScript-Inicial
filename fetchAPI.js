//JavaScript sincrono

console.log("Inicia Sincrono");
function dosSyn(){
    console.log("Se ejecuta la función 2");
}

function unoSync(){
    console.log("Se ejecuta la función 1");
    dosSyn();
    console.log("Se ejecuta el codigo 3");
}

unoSync();
console.log("Fin de Sincrono");

//JavaScript asincrono
console.log("Inicio de Asincrono");

function dosAsyn(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000);//Tiempo en ms
}

function unoAsyn(){
    dosAsyn();
    console.log("Tres");
}

unoAsyn();
console.log("Fin de Asincrono");

/**
 * Ejemplos de tareas Sincronas
 * 
 * -Ciclos
 * -Invocaciones a funciones
 * -EventListener (Especificamente cuando necesito el click)
 * -Condicionales
 */

/**
 * Ejemplo de tareas Asincronas
 * -Funciones setTimeout
 * -Notificación de cierre de sesión en apps bancarias
 * -Spotify con su cola de reproducción
 * -Conexiones a servidor
 * -Carga de API's
 */

/**
 * Ya que entendemos que la asincronia nos servirá para conectarnos a un servidor y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarda en responder (ms o s), es necesario saber que hay varios mecanismos para manejar operaciones asincronas en JS
 * 
 * -Callbacks (llamadas de vuelta): la forma mas clásica de gestionar la asincronia
 * 
 * -Promises (promesas): forma moderna
 * 
 * -Asyn/Await: forma moderna con una sintaxis mas ligera
 */

/**
 * Que es un CallBack (llamada de vuelta)
 * 
 * Un callback es una función que se pasa como argumento a otra función. Esta función se ejecutará despues de que la otra lo haga.
 * Este mecanismo nos ayuda a controlar que cierto código NO se ejecute antes de que el otro termine.
 * 
 * Para que lo necesitamos?
 * Sabemos que JS trabaja de forma descendente, entonces habrá casos en que queramos hacer que un codigo se ejecute despues  de que ocurra otra cosa y tambien de forma NO secuencial
 */

function hazClick(){
    console.log("Le hiciste click al boton");
}

const boton = document.getElementById("boton");
boton.addEventListener("click",hazClick);

//ejemplo callback
//Defino una función que toma un numero y un callback(función) como parametro
function dobleNumero(num, callback){
    const resultado = num * 2;  //Operación común y corriente
    callback(resultado);    //Invocación de ese callback con el resultado como parámetro
}

//Definir una funcion para mostrar el resultado
function mostrarResultado(resultado){
    console.log("El resultado es: ", resultado);
}

dobleNumero(5, mostrarResultado);