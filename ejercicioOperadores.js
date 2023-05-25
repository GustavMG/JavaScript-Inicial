let altura = prompt("Introduce la Altura en centimetros");
let peso = prompt("Introduce el Peso en libras");
let clasificacionIMC = "clasificaiondelIMC";
let alturaCm;
let pesoKg;
const libras= 0.453592;
const metro= 100;

calcularIMC();

function conversionLibras(peso) {
    pesoKg = peso * libras;
    return pesoKg;
}
function conversionAltura(altura) {
    alturaCm = altura / metro;
    return alturaCm;
}

function calcularIMC(){

    indiceDeMasaCorporal= conversionLibras(peso) / ((conversionAltura(altura)**2));

if (indiceDeMasaCorporal >=16 && indiceDeMasaCorporal <=16.9) {
    clasificacionIMC = "criterio de ingreso";
}
else if (indiceDeMasaCorporal >=17 && indiceDeMasaCorporal <=18.4) {
    clasificacionIMC = "infrapeso";
}
else if (indiceDeMasaCorporal >=18.5 && indiceDeMasaCorporal <=24.9) {
    clasificacionIMC = "Peso normal";
}
else if (indiceDeMasaCorporal >=25 && indiceDeMasaCorporal <=29.9) {
    clasificacionIMC = "Sobrepeso";
}
else if (indiceDeMasaCorporal >=30 && indiceDeMasaCorporal <=34.9) {
    clasificacionIMC = "Obesidad Premórbida";
}
else if (indiceDeMasaCorporal >=40 && indiceDeMasaCorporal <=45) {
    clasificacionIMC = "Obesidad mórbida";
}
else{
    clasificacionIMC = "Obesidad hipermórbida";
} 
console.log("Tu peso en kilogramos es ", pesoKg);
console.log("Tu altura en centimetros es ", alturaCm);
console.log("Tu IMC es: " + indiceDeMasaCorporal + " y tu categoria es: " + clasificacionIMC);
}