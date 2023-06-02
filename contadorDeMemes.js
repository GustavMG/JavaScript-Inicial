/* 
    Traer o referenciar todos los elementos el HTML con los que vamos a estar trabajando y los vamos a guardar en variables para poder utilizarlos despues

    
*/
//Metodo de selección
let numeroContador = document.getElementById("numeroContador");
let botonIncrementar = document.getElementById("botonIncrementar")
let botonDecrementar = document.getElementById("botonDecrementar")
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");

//Declarar una variable con un estado inicial
let contador = 0;

//Funciones 
function incrementar(){
    contador++;
    numeroContador.innerHTML = contador;
    if((contador % 10) == 0){
        mostrarImagen();
    }else{
        memeRandom.style.display = "none";
    }
}
function decrementar(){
    contador--;
    numeroContador.innerHTML = contador;
}
function resetear(){ 
    contador = 0;
    numeroContador.innerHTML = contador;
    memeRandom.style.display = "none";
}
function mostrarImagen(){   //La selección es random y se tomará un elemento del array 
    var coleccionImagenes = ["meme1.png", "meme2.png", "meme3.png", "meme4.png"];
    let indexRandom = Math.floor(Math.random()*coleccionImagenes.length);
    let urlAleatoria = coleccionImagenes[indexRandom];//Obtener url 
    memeRandom.src = "./assets/img/" + urlAleatoria;
    memeRandom.style.display = "block";
    
}
//Eventos
const botonCambiarColor = document.querySelector("#botonCambiarColor");

botonIncrementar.addEventListener("click", incrementar);
botonDecrementar.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);
