/*

    OPERADORES

    Los operadores nos permiten realizar una operación en uno o varios operandos (varias o datos)

    -Operadores de asignación
    -Operadores de cadena
    -Operadores logicos
    -Operadores de comparación
    -Operadores aritmeticos


    Operadores de asignación (=) se utilizanpara asignarle valor a una variable.
    Asigna un valor al oeprando de la izquierda basado en el valor del operador de la derecha.

    */

    //Operadores de asignación

    let edadFelipe = 31;
    var recipiente = "cafe";

    /*
        Operadores de comparación >, <, >=, ==, ===, !=, !==)

        Los operadores de comparaciónnos ayudan a comparar 2 expresiones o valores y nos devuelven un valor boolean que representa la relación de sus valores


    */

    let numero1 = 13;
    let numero2 = 25;
    let numero3 = "25";

    //Operador menor que
    console.log("El valor 13 es menor que el valor 25? " + (numero1 < numero2));
    
    //Operador mayor que
    console.log("El valor 13 es menor que el valor 25? " + (numero1 > numero2));
    
    //Operador mayor o igual que
    console.log("El valor 25 es menor o igual que el valor 25? " + (numero2 >= numero3));

    //Operador de igualdad solo evalua valores

    console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));
    
    //Operador de igualdad estricta (Evalua el valor y evalua el tipo de dato)
    
    console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));
    
    //Ejemplo de igual estricta
    console.log("El valor 25 es igual que el valor 25? " + (25 === "veinticinco"));

    //Operador de desigualdad (!=)
    console.log("El valor 13 no es igual al valor 25? " + (numero1 != numero2));

    //Operador de desiguladad estricta (!==)
    console.log("El valor 25 no es igual al valor25? " + (numero2 !== numero3));

/*
    Operadores lógicos (&& (and), || (or), ! (not))

    Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condición. El resultado será un valor boolean y sus operadores sson lógicos o asimilables entre ellos (los podemos combinar, y, los podemos poner en un orden especifico)-

    AND (&&)

    Sirve para determinar si dos expresiones son verdaderas.

    - Si ambas expresiones son verdaderas, el resultado es verdadero
    - Si una de las expresiones es falsa, el resultado es falso

    OR (||)

    Sirve para determinar si dos expresiones son falsas

    - Si cualquiera

*/

/*
    Operadores aritmeticos (+, -, *, /, %, ++, --)
    + suma
    - resta
    * multipliación
    / división
    % modulo o residuo): retorna el residuo de una división
    ** es para exponentes. Se escribe la base antes de los asteriscos y el exponente despues de los asteriscos

*/

let valor1 = 55;
let valor2 = 17;

// Aqui me esta haciendo una concatención, si suma los valor1 + valor2 pero el resultado me lo esta dando en string
// Nos podemos dar cuenta por el color del texto
console.log("Suma: " + (valor1 + valor2));

// Aqui se esta entregando el resultado de la suma como un NUMERO, se esta usando la coma (,) para hacer esta distinción
console.log("Suma: ", (valor1 + valor2));

console.log("Resta: ", (valor1 - valor2));

console.log("Multiplicación", (valor1 * valor2));

console.log("División", (valor1 / valor2));

console.log("Residuo", (valor1 % valor2));

console.log("Exponente ", (valor1 ** valor2));

console.log("Incremento: ", ++valor1);

console.log("Decremento: ", --valor2);