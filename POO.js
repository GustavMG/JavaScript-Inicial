/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/
//Creación de un objeto casa

const casa = {
    numHabitaciones: 3,
    numPisos: 2,
    numBanios: 1,
    color: "Rojo",
};


console.log("El color de mi casa es: ", casa.color);

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (keys) de nuestras propiedades, y cada que instancie o cree un objeto, esa información se va a ir personalizando

class casaPlantilla{
    //1. Definimos mis propiedades como variables, para posteriormente agregarle valores (Este valor se lo vamos a dar cuando instanciemos el objeto)
    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";

    //3. Definimos una función constructora. Esta función es una función especial que se dedica unica y exclusivamente a tomar los dastos que definimos como variables, para usarlos como parametros de construcción y asi poder instanciar nuestro objeto.
    //Los parametros se pasan en el orden en el que fueron declarados para que cada valor que se use se asigne a la variable correspondiente
    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;
    }



    //2. Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que hacer mi objeto

    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentana(){
        console.log("Swiiiiit, ventas abiertas");
    }

    guardameDelFresnito(){
        console.log("Que agusticida");
    }

    imprimirInfoDeLaCasa(){
        console.log("Info de casa")
    }
}
// En la clase definimos TODO de forma "normal" (declaran las avriables como normalmente las usamos, con el = y el ;), pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor

/*
Instanciar objetos

Para instanciar objets usamos la siguiente sintaxis:

variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construcción);

let objeto = new ClaseObjeto (parametros);

*/

//Tengo una variable llamada "casa de Felipe", que es un nuevo objeto de la clase "casa Plantilla" y que tiene los siguientes parametros
let casaDeFelipe = new casaPlantilla(6, 3, 3, "azul");

console.log(casaDeFelipe);
casaDeFelipe.encenderLuces();
casaDeFelipe.guardameDelFresnito();
console.log(casaDeFelipe.numHabitaciones);