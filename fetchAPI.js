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

// function hazClick(){
//     console.log("Le hiciste click al boton");
// }

// const boton = document.getElementById("boton");
// boton.addEventListener("click",hazClick);

// //ejemplo callback
// //Defino una función que toma un numero y un callback(función) como parametro
// function dobleNumero(num, callback){
//     const resultado = num * 2;  //Operación común y corriente
//     callback(resultado);    //Invocación de ese callback con el resultado como parámetro
// }

// //Definir una funcion para mostrar el resultado
// function mostrarResultado(resultado){
//     console.log("El resultado es: ", resultado);
// }

// dobleNumero(5, mostrarResultado);

/**
 * Promises (Promesas): Cuasndo trabajamos con promesas lo que recibimos es un objeto
 * Son otro mecanismo para manejar la asincronia.
 * Uitilizar el codigo hace que el codigo sea mas legible y practico que el usar callabacks, y como su nombre lo indica, una promesa es algo que en un prinicipio NO sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones y usamos una sola función (metodo) para manejar los callbacks.
 * 
 * !Nota: Las promesas son objetos
 * 
 * promise.then
 * 
 * primise.catch
 * 
 * Las promesas tienen estados:
 * *-Pendiente o pending: Es el estado inicial de nuestra promesa, aqui aun no tenemos resultados
 * 
 * *-Fullfield: Cuando la operación asincrona se completa con exito (resolve)
 * 
 * *-Rejected (rechazo): Cuando la operación falla (reject)
 * 
 * Tambien las promesas, al ser un objeto tienen metodos:
 * 
 * -then(function resolve): Ejecuta el callback llamado resolve cuando la promesa se cumple
 * 
 * -catch(funciton reject): Ejecuta el call back llamado reject cuando la promesa se rechaza
 * 
 * -then(resolve, reject): Puedo ejecutar las dos fuciones en el mismo metodo then
 * 
 */

//Crear una función llamada obtenerProductos para poder utilizar promesas y hacer la cconexión a mi url para obtener datos
function obtenerProductos(){
    //cuandos se ejecute la función quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene 2 funciones: una cuando se resuelve y otra cuando se recheza
    return new Promise(function(resolve, reject){//El objeto maneja 2 funciones (resuelto, rechazo)
        fetch('https://fakestoreapi.com/products')//dirección a donde me voy a conectar y buscar
        .then(function(response){
            if(response.ok){    //Propiedad booleana (si o no hay respuesta)
                return response.json() //Metodo para convertir la respuesta a un objeto .json
            } else{
                throw new Error("Error al obtener los productos. Error 404! Servidor NO encontrado"); //lanzo un nuevo erro(404)
            }
        })
        .then(function(data){   //Si hay una respuesta, resuelvo la promesa (existosa) y ya tengo mis datos para despues jugar con ellos
            resolve(data);
        })
        .catch(function(error){ //Si no hay una respuesta, resuelvo con un rechazo
            reject(error);
        });
    });

};

//Uso de la promesa

obtenerProductos().then(function(resultado){
    console.log(resultado);
})

.catch(function(error){
    console.log(error);
});

//Ejemplo de promesa para validar un nombre
//Si el nombre que estoy evaluando coincide con un valor ya guadrado previamente, entonces la promesa se resuelve correctamente.Si no, la promesa se rechaza y me muestra mensaje de error.

let nombre = "Felipe";
        //Que el objeto promesa tiene dos posibles soluciones
const promesaNombre = new Promise(function(resolve,reject){
    if(nombre != "Felipe"){ //Si el nombre es distino de felipe....
        reject("Error, el nombre NO es Felipe");    //Entonces rechaza la promesa
    } else{ //Si no...
        resolve("Que bien!, el nombre es correcto, bienvenido: " + nombre);  //Resuelve la promesa e imprimir un dato
    }
});

console.log(promesaNombre);