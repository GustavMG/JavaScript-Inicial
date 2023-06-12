//Manipulación del DOM + Fetch API

const input = document.getElementById("inputPokemon");
const button = document.getElementById("botonPokemon");
const pokemonContainer = document.querySelector("#pokemonContainer");

// button.addEventListener("click", traerPokemon(input.value));


//Primera función
function traerPokemon(nombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) // ${} <-- Esto se llama "plantilla literal"
        //Guardo la respuesta en un .json
        .then(respuesta => respuesta.json())    //Se resuelve la promesa

        //Ese .json lo asigno a una variable llamada datos que usaré para alimentar una función llamada crearPokemon
        .then((datos) => {
            crearPokemon(datos);
        });
}

function crearPokemon(nombrePokemon) {
    const pokeImg = document.createElement("img");  //Creo una etiqueta img
    pokeImg.src = nombrePokemon.sprites.front_default;  //front_default es el nombre de la propiedad donde esta la imagen de mi pokemon

    const h2 = document.createElement("h2");    //creo una etiqueta h2
    h2.textContent = nombrePokemon.name;    //le pongo el nombre del pokemon a ese h2

    const pokeDiv = document.createElement("div");  //Creamos un div para poner mi pokemon

    //Inserto los elementos imagen y h2 a un div particular de cada pokemon
    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);

    //Inserto ese div particular en un div general que esta en el HTML
    pokemonContainer.appendChild(pokeDiv);

}

// traerPokemon(54);    //Forma manual

//Utilizando un evento en un botón 
button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);