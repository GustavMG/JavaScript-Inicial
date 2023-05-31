//Solicitud de dato
let numeroSolicitado = prompt("Ingresa un numero a evaluar");
//Estado de numero primo
let numPrimo = false;
let contador = 2;


//Metodo GMG
while(!numPrimo){   //Inicialmente se hace la suposicion de que el numero NO es primo para que se evalue
    if (((numeroSolicitado == 2) || (numeroSolicitado == 3) || (numeroSolicitado % 2 != 0)) && (numeroSolicitado % 3 != 0) && (numeroSolicitado != 1)) {
        console.log("Numero primo");
        numPrimo = true;    //Al ser numero primo me salgo del proceso
    } else {
        console.log("Numero No Primo");
        numPrimo = false    //Sigue realizando el proceso
        numeroSolicitado = prompt("Ingresa un numero a evaluar");
    }
}

//Metodo de Felipe
/*
var numeroIngresado = prompt("Ingresa numero");
var esNumeroPrimo = true;

if(numeroIngresado <= 1){
    esNumeroPrimo = false;
} else{
    let divisor = 2;
    while((divisor <= numeroIngresado/2) && esNumeroPrimo){
        if(numeroIngresado % divisor == 0){
            esNumeroPrimo = false;
        }
        divisor++;  
    }
}*/