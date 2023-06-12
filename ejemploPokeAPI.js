/*
Necesitamos:
    -url
    -Promesa con 2 posibles caminos (rechazo y resolución)
        Si se resuelve me traigo
        si no, muestra
*/

/*Primer bloque para la conexión del servidor*/
const obtenerPokemon = new Promise((resolve, reject) =>{
    fetch("https://pokeapi.co/api/v2/pokemon/510")    //Me conecto
    .then(respuesta =>{//Aqui creo una función llamada respuesta, solo que es e formato de FUNCIÓN FLECHA
                        //Cuandos se conecte.....
        if(respuesta.ok){   // si la conexion es ok
            return respuesta.json();    //Guardo el dato en .json
        } else{ //Si no se conecta...
            throw new Error("Error 404, NO hubo conexión");
        }
    })
    /* Aqui termina el primer bloque */

    /*Segundo bloque (cuando ya em conecté al servidor)*/
    .then(datos =>{ //Entonces estos datos....
        resolve(datos); //Se usan como parámetro de mi resolución
    })
    /*Aqui termina el segundo bloque*/

    /*Tercer bloque (solo en caso de que NO se encuentre información*/
    .catch(error =>{
        reject("Mensaje de error, no encontramos tu pokemon: " + error);
    });
});

//Ya que le di el mensaje a mi mesero (creación de la promesa), ahora voy a poder mostrar la información si la promesa se resuelve (encuentra la info) o si se rechaza (NO encuentra la info)

obtenerPokemon  //No le ponemos parantesis ni nada pq estamos accediendo a una propiedad de un objeto, o sea: obtenerpokemon.then
.then(pokemon =>{   //El valor pokemon = datos obtenidos del servidor en .json
    console.log("Pokemon obtenido: ", pokemon.name);
})
.catch(error =>{
    console.log(error);
});

//Otra forma
function pokemon(datos, callback){
    datos = respuesta.json;
    callback(datos);
}

/**
 * Fetch API
 * 
 * Es una interfaz de JS que nos da un metodo llamado fetch, el cual  nos permite manejar solicitudes HTTP (GET, POST, PUT, DELET).
 * 
 * Cuando usamos fetch API sabemos que de forma implicita estamos usando promesas, tambien sabemos de forma implicita que esa promesa se puede resolver o rechazar.
 * 
 * El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response" que incluye la respuesta de la solicitud (a parte de decirnos que la conexión es ok, "pega" la información de lo que estamos consultando)
 * 
 * Ya que tenemos el objeto llamado "response", vamos a podert hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc
 */

//Realizamos la petición al servidor
fetch("https://pokeapi.co/api/v2/pokemon/ditto")    //Me conecto
    .then(pokeRespuesta =>{  //Cuando la promesa se resuelve , ejecutamos esta función
        return pokeRespuesta.json(); //Esta función retorna la información de la pokeRespuesta en un JSON (.json)
    })
    
    .then(pokeInfo =>{  //Cuando la promesa de la conexión se resuelve, entonces ejecutamos esta otra función, Esta función guarda la información de la respuesta y lo guarda en una nueva variable llamada pokeInfo.
        
        //Uso esa variable para hacer muchas cosas
        console.log("El nombre del pokemon es:", pokeInfo.name, ", su numero de la pokedex es:", pokeInfo.order, " y su numero en la pokedex es:", pokeInfo.id)
        console.log(pokeInfo);
    })
    .then(otraPokeCosa =>{
        //Codigo para hacer esa PokeCosa
    })
    .catch(pokeError =>{
        console.log("No encontramos nada de información", + pokeError);
    });