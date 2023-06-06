//1. Obtener los elementos del html para guardarlos en variables
//Almaceno el lugar de destino de mi tarjetita en una constante, en este caso el destino es un contendor con un id "product-container"
const container = document.getElementById("product-container"); //almaceno con getElementById pq es un ID lo que estoy trabajando

const botonAgregar = document.getElementById("agregar-producto");

//Almacenar elementos del formulario en variables de JS como objetos (objeto completo)
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");


//Función para agregar producto
function agregarProducto(){

//Guardo los VALORES de mis inputs en variables nuevas, para guardar el VALOR como es un objeto acceso a su propiedad con un . --> objeto.propiedad
let valorInputProducto = nombreProducto.value;
let valorInputDescripcion = descripcionProducto.value;
let valorInputImagen = imagenProducto.value;

//Hago una impresión de los valor que estoy ingresando en los input, esto está de más, es solo para ver en la consola del navegador
console.log(valorInputDescripcion); //Aqui se hace una primera impresión en la consola y para posteriormente realmente hacer la impresión de los valores, ESTO ESTA RARITO
console.log(valorInputDescripcion);
console.log(valorInputProducto);

//Quiero que cada tarjettita tenga su propio div o contenedor
const productCard = document.createElement("div");  //Aqui estamos creando un "div" para almacenar en el contenedor principal "div id="product-container", es unicamente para tenerlo agrupado y tener un orden"

//Aqui creo el elemento
//Se utilizan los llamados backticks `  `
//Estamos utilizando la expresión ${nombreVariable} para hacer una referencia a la variable que almacena la propiedad del objeto deseado
//Aqui solo se tiene como valores de ingreso el nombre del producto y la descripción, la imagen del producto tambien pero no estamos accediendo
//TODO Investigar esto de las imagenes!!!!!!!
productCard.innerHTML = `
    <img src = "${valorInputImagen}" alt = "Imagen Producto" width="400px" height="400px">
    <h3>${valorInputProducto}</h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p>Precio: $9.99</p>
    <button class="btn">Agregar al carrito</button>
    <br>
    <br>
`;
//Agregar esa tarjeta de producto al container especificando (Este es el hijo)
//Aqui inserto el elemento
container.appendChild(productCard);
}


//Creamos el evento para hacer click y ejecutar la función agregarProducto
botonAgregar.addEventListener("click", agregarProducto);
