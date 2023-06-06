/*
En JavaScript, las clases y las funciones constructoras son dos enfoques diferentes para crear objetos y definir su comportamiento.

1. Clases en JavaScript:
Una clase en JavaScript es una plantilla que define la estructura y el comportamiento de un objeto. Se introdujo en ECMAScript 2015 (también conocido como ES6) para proporcionar una sintaxis más clara y orientada a objetos. Una clase puede tener propiedades y métodos, y se utiliza para crear múltiples instancias de objetos con las mismas características.


*/

//Ejemplo de clase en JavaScript:
//Se define una clase Persona con un constructor que inicializa las propiedades nombre y edad
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //Se define un método saludar() que muestra un mensaje con los datos de la persona
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y me estoy imprimiendo con el metodo saludar() desde UNA CLASE`);
    }
}

// Crear una instancia de la clase Persona
//Se crea una instancia de la clase Persona y se llama al método saludar() para mostrar el saludo.
const persona1 = new Persona("Gus", 28);

// Llamar al método de la clase Persona
persona1.saludar(); // Salida: Hola, mi nombre es Gustavo y tengo 28 años.

/*
2. Funciones constructoras en JavaScript:
Antes de la introducción de las clases en ES6, las funciones constructoras eran el método principal para crear objetos con características similares. Una función constructora es simplemente una función que se utiliza con el operador new para crear un objeto. Dentro de la función constructora, se definen las propiedades y los métodos del objeto utilizando la palabra clave this.
*/

//Ejemplo de cómo se define y se utiliza una función constructora en JavaScript
//Se define una función constructora PersonaConstructor que se utiliza para crear objetos con las propiedades nombre y edad, así como el método saludar().
function PersonaConstructor(nombre, edad) {
//La palabra clave "this" se utiliza para asignar los valores a las propiedades y definir el método dentro del objeto creado con new PersonaConstructor().
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function () {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y me estoy imprimiendo con el metodo saludar() desde una FUNCION CONSTRUCTORA`);
    };
}

// Crear una instancia de la función constructora Persona
const persona2 = new PersonaConstructor("Tavo", 28);

// Llamar al método de la función constructora Persona
persona2.saludar(); // Salida: Hola, mi nombre es Tavo y tengo 28 años.

/*
Tanto las clases como las funciones constructoras en JavaScript permiten crear objetos con propiedades y métodos. Sin embargo, las clases brindan una sintaxis más legible y orientada a objetos, mientras que las funciones constructoras son el enfoque más tradicional y ampliamente utilizado. 
*/