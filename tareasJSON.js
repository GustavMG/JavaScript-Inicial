//1. Creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus completada o no completada

//Esto donde se ejecuta? Del lado del cliente 

let tareas = [
    {
        id : 1,
        titulo : "Baniar al perro",
        estatus : true,
    },
    {
        id : 2,
        titulo : "Preparar la comida",
        estatus : false,
    }
]


//Enviar ese arreglo al servidor 
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);



//Ejemplo del carrito de compras

//Declaramos un arreglo de objetos vacio
let carritoDeCompras = [];

//Producto de mi catalogo
let producto = {
    id : 1,
    nombre : "Camisa de Pokemon",
    precio: 299.99,
    cantidad: 1
};

//Mostrar informacion del carrito de compras
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //undefined

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);

//Muestro la nueva informacion de mi carrito
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1


//Actualizar la cantidad de productos en el carrito
let productoId = 1; //producto a actualizar
let nuevaCantidad = 3; //cantidad nueva de productos que voy a comprar

//Verifico si mi producto existe dentro del carrito de compras para poder modificarlo, si exsite, actualizo la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro de mi carrito de compras.
let productoExiste = carritoDeCompras.find(function(producto){
    return producto.id === productoId; //true or false
})
if (productoExiste) {
    productoExiste.cantidad = nuevaCantidad; //Se modifica 
}

console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

console.log(producto);

//Eliminar un carrito del producto
let productoAEliminar = 1;

//Reviso el id del producto a eliminar encada uno de los indices de mi arreglo, si encuentro un indice que dentro tenga un objeto que coincida con el id que quiero borrar, entonces lo elimino
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
    return producto.id === productoAEliminar;   //true o false
});

//Verificar si el indice ddel elemento que se encontró es válido. Con el findEndex por a devolver el primer indice del elemento que cumpla con la condición.
//Si no se encuentra el elemento que coincida con la condición, entonces vamos a devolver -1, esto para evitar borrar un elemento que no sea (pensando que tenemos un indice 0)
if(indiceProductoAEliminar != -1){//0,1,2... dispara true y se activa el if. Que el -1 dispara false, y no se activa el if.
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}

console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);


//Comprar producto (pagar carrito de compras)

/*
El metodo forEach es un metodo de arrays de JS, que nos va a ayudar a poder ejecutar una función en cada elemento de nuestro array

Sintaxis de un for Each

array.forEach(function(elemento, indice, arreglo))

*/
let total = 0;
//Oye JS, en mi carrito de compras, para cada producto que enuentres, ejecuta una función donde tomes un producto como parametros, y al encontrarlo vas a multiplicar el precio de ese producto por su cantidad. Ya que lo hayas hecho, vas a tomar ese valor y lo vas a sumar y a reasigar a la variable llamada total que declaré arriba
carritoDeCompras.forEach(function(producto){
    total+= producto.precio * producto.cantidad;
});


//Reviso el total de mi carrito de compras
console.log("El total de tu carrito de compras es de: $", total);

let carritoJSON = JSON.stringify(carritoDeCompras);
console.log(carritoJSON);










//Para vaciar todo el carrito de compras


/*
//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha

carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})

*/