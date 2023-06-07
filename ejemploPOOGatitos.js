// Ejemplo POO con Gatitos

class gatitos{

    //1. Propiedades
    nombre = "";
    edad = 0;
    tamanio = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //3. Constructor
    constructor(nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this. raza = raza;
        this.vacunas = vacunas;
    }

    //2. Metodos
    imprimirInfo(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad);
        console.log("El tamaño de mi gato es: ", this.tamanio);
        console.log("El caracter de mi gato es: ", this.caracter);
        console.log("El numero de vidas de mi gato es: ", this.numeroVidas);
        console.log("El color de mi gato es: ", this.color);
        console.log("La raza de mi gato es: ", this.raza);
        console.log("Mi gato tiene vacunas?: ", this.vacunas);
    };

    maullar(){
        console.log("Miauuuu");
    };

    rasguniar(){
        console.log("Rrrrrr")
    };

    ronronear(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gato pq tiene pocas vidas");
        }
    };
}

//Instanciar
let juanchoDelCampo = new gatitos ("Juancho del campo", 5, "grande", "Tranquilo", 7, "Naranja", "Angora", true);
let nenito = new gatitos("Nenito", 3, "Mediano", "Travieso", 2, "Blanco con naranja", "Desconocida", true);
let panquesito = new gatitos("Panquesito", 2, "Chiquito", "Jugueton", 9, "Blanquito", "Criollo", true);
let hannibal = new gatitos("Hannibal", 4, "Chiquito", "Comelon", 9, "Gris", "Criollo", true);
let mielecita = new gatitos("Panquesito", 2, "Chiquito", "Jugueton", 9, "Cafecito", "Criollo", true);

juanchoDelCampo.imprimirInfo();
juanchoDelCampo.ronronear();
nenito.ronronear();
panquesito.imprimirInfo();

/*
    JSON (JavaScript Object Notation)

    Es un formato basado en texto(string) para representar datos estructurados(objetos) basados en la sintaxis de objetos JavaScvript ({, :})
    JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

    Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

//Objeto normal en JavaScript
objeto = {
    nombre: "Felipe",
    edad: 15,
}
console.log(objeto);

/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es
*/

console.log(JSON.stringify(objeto));

console.log("Esto es un objeto serializado,", objetoSerealizado);

console.objeto(objetoSerealizado)