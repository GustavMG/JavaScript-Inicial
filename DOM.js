/*DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

Elementos del DOM

Todos los elementos del DOM se consideran nodos. 

 - Document (Es el nodo raiz)
 - Element (todas las etiquetas de HTML)
 - Texto (textos que estan dentro de las etiquetas)
 - Atributo (todos los atributos que pueden llegar a tener las etiquetas)
 - Comentario (Todos los comentarios del documento)

Comunicación entre HTML y JS

Metodos de selección de elementos

Son elementos que nos van a permitir seleccionar 1 o varios elementos o grupos de ellos del DOM. Estos metodos se utilizan en el documentos, por eso se agrega  un document.getElement

Tradicionales
    getElementById
    getElementByClassName
    getElementByTagName

Modernos
    querySelector();    ->Busca el primer elemento que coincide con el selector de CSS
    querySelectorAll(); -> Busca todos los elementos que coinciden con el selector de CSS

*/
/*
//Traer elementos con getElementById
let parrafo = document.getElementById("parrafo1");

parrafo.style.color = "blue";
parrafo.innerHTML = "Hola, este es un nuevo texto generado con un inerHTML";

console.log(parrafo);   //info del objeto

//Traer elementos con getElementsByClassName
let parrafitos = document.getElementsByClassName("parrafos");
console.log(parrafitos);    //Info de HTML Collection

//Traer elementos por nombre de etiqueta
var parrafosEtiqueta = document.getElementsByTagName("p");
console.log(parrafosEtiqueta);

//Metodos mas actuales
var parrafoQuerySelector = document.querySelector("#parrafo1");
var parraforQuerySelectorsAll = document.querySelectorAll(".parrafos");

console.log(parrafoQuerySelector);
console.log(parraforQuerySelectorsAll);


//Evento HTML
function cambiarColor(color){
    parrafo.style.color = color;
}*/

//Evento con Eventlistener
/*
    Permite escuchar el evento indicado(primer parametro) y despues en el caso de que ocurra(escuche), se ejecuta la función asociada (segundo parametro).

    Sintaxis

    object.addEventListener(nombreDelEvento, funcionQueSeDispara);
*/
/*
//referenciar boton

const botonCambiarColor = document.querySelector("#botonCambiarColor");

botonCambiarColor.addEventListener("click", 

function(){
    alert("Hola, has presionado el boton para cambiar color");
}
)
*/
/*
    Elementos para crear y agregar nodos a nuestro DOM

    Flujo normal para hacer esto es:
    1 se crean
    2 se agregan

    Sintaxis para crear elementos:
    elementosPadre.createElement("tipoDeElemento")
*/


//Primero se tiene que crear el elemento y luego agregarlo
//Para crear elementos createElement()
const div = document.createElement("div");

//Para insertarlo appendChield
document.body.appendChild(div);

//Codigo para agregar una imagen a mi documento

//1ro Creo la imagen
var appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt = "Imagen sorpresa"

//2do Insertar
document.body.appendChild(appendImg);