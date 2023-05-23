// alert("Estoy vivo!");



/*
    Variables

    Es un elemento del cual su valor puede cambiar o varias dependiendo su circunstancia. Esta variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable que tenemos.

    Variable = recipiente donde pondremos el valor
    Valor = La informción con la que llenamos el recipiente

    Declarar = Ponerle nombre a nuestro recipiente
    Inicializar = Llenar ese recipiente
*/

/*
    CamelCase es una buena practica para nombrar las variables primeraPalabraMiniscula y las demas en mayuscula la primera
    Hay lowerCamelCase y UpperCamelCase
*/

recipiente = "agua";
recipiente = "cafe";
recipiente = "colores y lapices";

// Usamos esta linea de codigo para imprimir o mostrar la información de mi recipiente
console.log(recipiente);

// Declarar vs Inicializar

// edad;
// altura;
// peso;
// genero;

/*
    Tipos de datos (primitivos y No primitivos)

    Se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato mas simple o mas básico que existe.

    -String: Sirve para agregar valores en forma de texto, para que se considere asi el valor debe estar dentro de comillas simples (' '), dobles (" ") y backticks(` `).

    -Number: Srive para agregar valores en formato numerico (para poder usarlos en operaciones aritmeticas). No se usa comillas

    -Boolean: Sirven para representar valores del tipo True o False, 0 o 1, Si o No

    -Undefined: Sirve para representar una variable o un tipo de dato que no tiene valor. Esto es cuando declaramos variables sin inicializar tendremos datos del tipo undefined.

    -Null: Sirve para definir que un valor es nulo.

    -NaN (Not a Number): Sirve para representar un valor que no es un numero.  Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.

    -Symbol: 
    -Object (no es primitivo)
*/

// Ejemplo para la concatenación

apodoDeFelipe = "El amante 'numero uno' de los chilaquiles verdes";
apodoDeFelipe = 'El amante "numero uno" de los chilaquiles verdes';
console.log(apodoDeFelipe);

// Ejemplo de valores numericos

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log("La edad actual de de felipe es: " + edadDeFelipe);
console.log("Costo de un gansito es: " + costoDeUnGansito);
console.log("El saldo de la cuenta actual de felipe es: " + cuentaDeFelipe);

// Ejemplo de valores Booleanos

esAdministrador = true;
constraseñaCorrecta = false;
cuentaPremium = false;

// Ejemplo de valores Undefined ----> Las variables NO definidas causan error en los programas

// respuestaDeMiCrush;
// precioBoletoEstacionamiento;



// Ejemplo de valores Null

respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);

// Ejemplo de valores NaN

operacionMatematica = 0/0;
console.log(operacionMatematica);

/* TypeOf
    Es una expresión que nos ayuda a saber que tipo de dato es el que estoy evaluando y la sintaxis es:
        typeof(elDatoAEvaluar);

    Todos los resultados que arroja son cadenas/-string con el tipo de dato que estamos evaluando.
*/

console.log(typeof(esAdministrador));   //Boolean
console.log(typeof(edadDeFelipe));  //Number

/* Tipos de variables

    En JS tenemos 3 tipos principales de variables:

        - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope(alcance) global, esto es que el valor de esta variable esta disponible en todo el programa.

        - let: Lo usamos para limitare l alcance de nuestras variables (scope), y se limita  aun bloque de codigo o expresión (meter variables dentro de funciones). variables locales

        - const: 

*/

// En este caso la mamá de bambi esta visible desde cualquier lugar del programa
var mamaDeBambiViva = false;

var cazador = "listo para disparar";

let nombre = "Felipe Maqueda";

const pi = 3.1416;

/**
    Funciones

    Una funcion es una agrupación de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones nos e ejecuten si no que se invoquen.

    *Parametros: Variables que necesitamos para alimentar mi función (todad las variables se tienen que utilizar)

    Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, agua.

    *Nombre de la función: Con el nombre, nosotros vamos a poder activar o invocar la función (basicamente, tenemos que llamarla para que funcione)
    Ejemplo: prepararAguitaDeLimon


    -Operaciones: Conjunto de instrucciones (en orden especifico).
    Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


    -Resultado: Las funciones generalmente deben tener un resultado.
    Ejemplo: Vasito de aguita de limon
 */

    //1. Creamos la funcion con la palabra reservada function y le ponemos un nombre. Despues, abrimos y cerramos parentesis y abrimos y cerraremos llaves {}

    //2. Ponemos nuestros parametros (variables) dentro del parentesis

    //3. Poner las instrucciones dentro de las llaves, utilizando los parametros o argumentos

    //4. Invocar la función escribiendo su nombre y abrimos y cerramos parentesis

    var limon = "limon";
    var agua = "agua";
    var hielos = "hielos";
    var azucar = "azucar";
    var vaso = "vaso";
    var cuchara = "cuchara";
    
    function prepararAguitaDeLimon(limon, agua, hielos, azucar, vaso, cuchara){

        var limon = "limon";
        var agua = "agua";
        var hielos = "hielos";
        var azucar = "azucar";
        var vaso = "vaso";
        var cuchara = "cuchara";

        console.log("Cortar el limon " + limon);
        console.log("Exprimir limon");
        console.log("Agregar el jugo de limon al vaso " + vaso);
        console.log("Agregamos los hielos la vaso " + hielos);
        console.log("Agregamos el agua al vaso " + agua);
        console.log("Endulzamos al gusto " + azucar);
        console.log("Mezclar y disfrutar " + cuchara);
        console.log("Que rica agua de limón");

        var cuchara = "tenedor";

        console.log(cuchara);
    }

    prepararAguitaDeLimon();

    // Ejemplo de las 3 formas de agregar parametros a funciones

    // Primera forma: Usando parametros dentro de los parentesis e inicializando dentro de la función

    function suma(a, b){ //Valores estan en undefined
        a = 5;  //cambio el undefined por 5
        b = 7;  //cambio el undefined por 7

        resultadoSuma = a + b;   //Hago mi suma utilizando los dos valores

        console.log(resultadoSuma); //Imprimo resultado
    }

    suma();    //Invoco la función

    // Segunda forma: Usando parametros dentro del parentesis ya inicializados

    function resta(a = 8, b = 5){
        
        resultadoResta = a - b;

        console.log(resultadoResta);
    }

    resta();

    // Tercera forma: Inicializando valores dentro de la invocación

    function multiplicacion(a, b){

        resultadoMultiplica = a * b;

        console.log(resultadoMultiplica);
    }

    multiplicacion(5,5);
    multiplicacion(5,4);
    multiplicacion(5,3);
    multiplicacion(5,2);
    multiplicacion(5, );    //Se imprime NaN pq nos hace falta un parametro

    //  Funciones anonimas

    let funcionAnonima = function(a, b){
        operacion = a / b;
        console.log(operacion);
    }

    console.log(funcionAnonima);
    funcionAnonima(10, 5);

    // Uso del return, estas funciones son solamen

    // Funcion para dar un saludo personalizado
    function saludos(nombreSaludo){
        let nombreSaludoEnFuncion = nombreSaludo;
        console.log("Iniciando...");
        return "Hola " + nombreSaludoEnFuncion;
    }

    //saludos("GUSTAVO");

    const nombreQueSaqueDeMiFuncion = saludos(prompt("Introduce tu nombre por favor"));


    //console.log( saludos("GUSTAVO"));
    console.log(nombreQueSaqueDeMiFuncion);