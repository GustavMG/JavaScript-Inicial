/*
    Bucles e iteración

    En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, respetir tareas tantas veces queramos. Gracias a esto vamos a poder automarizar tareas repetitivas.

    - While (mientras)
    - Do While (hacer mientras)
    - For (para)

    While (mientras)
    Este bucle nos sirve para realizar una tarea repetitiva, mientras una condición sea VERDADERA. A diferencia de if, que pregunta una vez y despues ejecuta el bloque de codigo hasta que la condición devuelva false-

    Estructura basica de While
    while(tenerSuenio && tenerCamita){
    //Dormir
}

    Esto es un ciclo infinito

    while(true){
        //Bloque de codigo a ejecutar, esto es un ciclo infinito que NO se debe de ejecutar
    }

    CASOS DE USO:
    - Para verificar si un usuario esta registrado o no
    - Verificamos la disponibilidad de un producto (stock)
    - Realizamos acciones sobre nuestro carrito, impuestos, actualizar información, etc

    Do While (Hacer mientras)
    Es similar al while, con la diferencia de que la condición se evalua despues de cada iteración. Esto garantiza que se ejecute al menos una vez la instrucción

    do{
        //Bloque del codigo que vamos a ejecutar
    } while(condicion);

    Ciclo For(para)

    Se utiliza cuando se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicialización, condición y expresión final.
    El bloque de codigo se ejecuta mientras la condición sea verdadera, y despues de cada iteración se ejecuta la expresión final

    for(inicializacion; condicion; expresion de iteracion){
        //Bloque de codigo a ejecutar
    }

    - inicialización: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

    - condición: se verifican antes de cada iteración, y si se evalua como verdadera, el bucle se ejecuta

    - expresión de iteración: se ejecuta

*/

// Codigo de mi sopita de verduras con pollito

//Declaro e inicializo un array con mis ingredientes
let ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"];

let contador = 0;

while(contador < ingredientes.length ){
    console.log("Agregando: " + ingredientes[contador] + " a la olla");
    contador++;
}

console.log("La sopa ya esta lista!");



//Variable tiempo de cocción que servirá como contador
let tiempoTranscurridoDeCoccion = 0;

//Usamos el ciclo Do-While

do{
    console.log("Horneando las galletas....");
    // console.log(tiempoTranscurridoDeCoccion);
    tiempoTranscurridoDeCoccion += 5;
} while(tiempoTranscurridoDeCoccion < 30);

tiempoTranscurridoDeCoccion = 0;
for(let i = 0; i <30; i++){
    console.log("Horneando las galletas....");
}

//  Ciclo for

let pasosReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"];
let tiempoPorPaso = [15, 10, 20];

console.log("Ejemplo de la pizza con Ciclo For");

for(let paso = 0; paso < pasosReceta.length; paso++){
    console.log("Realizando paso " + pasosReceta[paso]);
    console.log("Esperando " + tiempoPorPaso[paso] + " minutos");
}
console.log("Disfruta tu pizza!")

//Ejemplo contador con For para cuenta regresiva de cohete
for(let i = 10; i > 0; i--){
    console.log("Faltan " + i + " segundos para el despegue");
}

//Ejemplo for para cupones de descuento
for(let cupones = 10; cupones > 0; cupones--){
    console.log("Tienes un cupon de descuento, nos queda: " + cupones + " cupones");
}

function imprimirAsteriscos(){
    console.log("******************");
}