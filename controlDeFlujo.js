/*
    Control de flujo

    Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

    En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

    Condicionales

    Son estructuras o condiciones que nos permtiten modificar el orden natural de ejecución de nuestro programa. Son sentencias especificas que nos ayudará a decidir si una condición se cumple o no(verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.
*/
/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/
//Felipe tiene 17 anios, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.


//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

let edadFelipe = 17;
let edadPermitida = 18;

if (edadFelipe < edadPermitida) {
    console.log("Lo siento Felipe, no puedes ir a la fiesta");
}

let edadAxel = "m";
let edadParaEntrarALaFiesta = 18;

if (edadAxel < edadParaEntrarALaFiesta) {
    console.log("Lo siento, no puedes entrar a a la fiesta");
} else {
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta");
}

/*

Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.



Estructura basica del Else


if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 

else 

{
    //Este bloque se ejecuta si la condicion es falsa
}


*/

/* Test de nuestro programa

    - "false" (String)
    - NaN
    - false (boolean)
*/

/*
    Else if (ademas si / si no entonces)

    Esta condicional nos ayuda a ejecutar una nueva condición en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.

    Estructura basica del else if

    if (condicion 1){
        //Bloque de codigo que se ejecuta si la condición 1 es verdadera
    }
    else if(condicion 2){
        //Bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
    }
    else if(condicion 3){
        //Bloque de codigo que se ejecuta si la condicion 1 es falsa, la condicion 2 es falsa y la condición 3 es verdadera
    }
    else{
        //Bloque que se ejecuta si no se cumplen las condiciones anteriores
    }

*/
/*
let hora = prompt("Ingresa la hora actual");
if (hora < 12){
    console.log("Buenos dias");
} else if(hora <= 19){
    console.log("Buenas tardes ya, que barbaro como pasa el tiempo");
} else{
    console.log("Buenas noches, vamos a mimir");
}*/

/*
    Switch

    Esta condición nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables.
    Evalua una expresión comparando el valor de un dato o variable, y ejecutando la instrucción asociada a ese caso

    - case: Evalua el caso o condición asociado que dispara un bloque de código
    - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos

    switch(expresion o condicion){
        case valo1:
            //Codigo que se ejecuta si la condicion es igual a valor1
        break;

        case valo2:
            //Codigo que se ejecuta si la condicion es igual a valor2
        break;

        case valo3:
            //Codigo que se ejecuta si la condicion es igual a valor3
        break;

        case valo4:
            //Codigo que se ejecuta si la condicion es igual a valor4
        break;

        case valo5:
            //Codigo que se ejecuta si la condicion es igual a valor5
        break;

        default:
            //Ingresaste un piso incorrecto
    }

*/

//EJEMPLO DE SWITCH

let pisoDestino = prompt("Ingresa el piso al que quieras ir (1 al 5)");

switch (pisoDestino) {
    case "1":
        console.log("Vamos a piso 1(Suena musica de elevador de fondo)");
        break;

    case "2":
        console.log("Vamos a piso 2(Suena musica de elevador de fondo)");
        break;

    case "3":
        console.log("Vamos a piso 3(Suena musica de elevador de fondo)");
        break;

    case "4":
        console.log("Vamos a piso 4(Suena musica de elevador de fondo)");
        break;

    case "5":
        console.log("Vamos a piso 5(Suena musica de elevador de fondo)");
        break;

    default:
        console.log("Ingresaste un piso incorrecto");

}

//  EJERCICIO DE EVEE

var elementoEvolucion = prompt("Ingresa la piedra evolutica que tienes (agua, trueno o fuego) ")

switch (elementoEvolucion) {
    case "agua":
        console.log("Tu Evee ha evolucionado a Vaporeon");
        break;

    case "trueno":
        console.log("Tu Evee ha evolucionado a Jolteon");
        break;
    case "fuego":
        console.log("Tu Evee ha evolucionado a Flareon");
        break;
}