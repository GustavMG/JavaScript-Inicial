//      EJERCICIO DE JUGUETERIA v1
/*

//Declaración cantidad de juguetes
payasos = 27;
muñecas = 14;

//Declaración cantidad de peso en gr de juguetes
pesoPayasos = 112;
pesoMuñeca = 75;

//Declaración de variable para el resultado
pesoTotal = 0;

//Operación
pesoTotal = ((payasos*pesoPayasos) + (muñecas*pesoMuñeca))/1000;

//Impresión de resultado
console.log("El peso total del paquete es: " + pesoTotal + "kg");
*/

//  EJERCICCIO JUGUETERIA V2

const pesoPayaso = 112;
const pesoMuñeca = 75;

var payasoVendido = prompt("Introduce la cantidad de payasos a comprar:");

var muñecaVendida = prompt("Introduce la cantidad de muñecas a comprar:");

function calculoPeso(){
    pesoVendidoPayaso = pesoPayaso * payasoVendido;
    pesoVendidoMuñeca = pesoMuñeca * muñecaVendida;
    totalDelPedido= (pesoVendidoPayaso + pesoVendidoMuñeca) /1000;
    

    
    return console.log("El peso total del pedido es de " + totalDelPedido + " Kg");    
}

calculoPeso();