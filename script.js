alert("Estoy vivo!");

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


// Ejemplo de valores Symbol

// Ejemplo de valores Object