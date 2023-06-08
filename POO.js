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

/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserealizar un objeto JSON, vamos a utilizar un metodo llamado JSON.parse(Objeto que queremos deserealizar)

let objetoDeserealizado = (JSON.parse(objetoSerializado));
console.log(objetoDeserealizado);