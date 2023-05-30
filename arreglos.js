/*
    Arreglos (arrays, matrices, colecciones de datos)

    En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 
    Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.


*/

//Formas de declarar un array o arreglo

//1. Usando los corchetes

var miArray = [1, 2, 3, 4, 5, 6];

//Variable sin inicializar

var colores;

//Arreglo sin asignar una variable

["azul", "rojo", "naranja", "verde"];

//Variable colores declarada e inicializada

var colores = ["azul", "rojo", "naranja", "verde", ["verde pastel", "amarillo pastel", "rosa pastel"]];

console.log(colores);

//Podemos tener distintos tipos de datos en un mismo arreglo

var datosFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null];

//Cada asignatura esta asociada a una variable individual

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asigantura3 = "Fisica";

//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log(typeof(asignaturas));

//Acceso a elementos de un arreglo mediante sus indices
console.log("El elementos en la posición 2 de mis asignaturas es: ", asignaturas[2]);

//Mostrar la longitud de mi arreglo

console.log(asignaturas.length);

//EJEMPLO DE ARRAY

//Array carrito de compras

var carrito = ["pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "20-mayo-2023"];
console.log(publicacion);

//Modificar los elementos dentro del array
//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index

publicacion[1] = 138;

console.log(publicacion);

//Metodos para agregar elementos al final de un arreglo
asignaturas.push("Biologia");
asignaturas.push("Ingles");
console.log(asignaturas.length);
console.log(asignaturas);

//Metodo para eliminar el ultimo elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);

//Metodo para agregar elementos al principio de un arreglo
asignaturas.unshift("Quimica", "Educacion Fisica", "Artes");
console.log(asignaturas);

//Metodo para eliminar elementos del principio de un arreglo
asignaturas.shift();
console.log(asignaturas);

//Metodo para saber si mi arreglo incluye un elemento especifico
let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas Maria", "Mazapan"];

console.log(carritoDeWalmart.includes("Coquita"));
regalo = carritoDeWalmart.includes("Coquita");

if (regalo){
    console.log("Te regalo una sarten");
}

var amigos = ["Felipe", "Mariana", "Fernandad", "Maara", "Gaby", "Marina"];

var mejoresAmigos;

var publico;

if(!amigos){
    console.log("Mi meme que solo los que NO son mis amigos pueden ver");
}

//Metodo para concatenar arreglos
var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Maria", "Mazapan"];

var listaDeFrutitasYVerduritas = ["manzanas", "mangos", "toronjas", "platanos", "fresas"];

var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutitasYVerduritas);

console.log(listaDeComprasDeLaQuincena);

//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparición, si el elemento NO se encuentra retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("Coquitas"));

//Metodo pra unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join("\n"));

// Modificación del arreglo (push, pop, shift, unshift, splice)

// Acceso y busqueda de elementos (indexOf, lastIndexOf, includes)

// Transformación de elementos (sort, reverse, map)

/* Splice (agregar, eliminar o reemplazar elementos en posiciones especificas)
    Sintaxis

    array.splice(iniciamos, numeroElementosABorrar, ElementoAInsertar, ElementoAInsertar);
*/

// Splice para borrar elementos
var abecedario = ["A", "B", "C", "D", "E"]; //Borrar Cy D

abecedario.splice(2,2);
console.log(abecedario);    //ABE

// Splice para insertar elementos
abecedario.splice(2, 0, "C", "D");
console.log(abecedario);    //ABCDE

// Splice para reemplazar elementos del arreglo
var vocales = ["A", "E", "I", "O", "U"];

vocales.splice(1, 2, "COMER", "COMER", "COMER");
console.log(vocales);