// EJERCICIO DE SIGNOS DEL ZODIACO

let diaNacimiento = prompt("Ingresa tu dia de Nacimiento en formato de 2 digitos");
let mesNacimiento = prompt("Ingresa tu mes de Nacimiento en formato de 2 digitos");
let signoZodiacal = prompt("Ingresa tu signo ZODIACAL en MAYUSCULAS");

switch (mesNacimiento) {
    case "01":
        if (31 >= diaNacimiento > 19) {
            console.log("Tu signo es Aries");
        }
        else {
            console.log("Tu signo es Capricornio");
        }
        break;

    case "02":
        if (29 >= diaNacimiento > 18) {
            console.log("Tu signo es Piscis");
        }
        else {
            console.log("Tu signo es Acuario");
        }
        break;

    case "03":
        if (31 >= diaNacimiento > 20) {
            console.log("Tu signo es Aries");
        }
        else {
            console.log("Tu signo es Piscis");
        }
        break;

    case "04":
        if (30 >= diaNacimiento > 19) {
            console.log("Tu signo es Tauro");
        }
        else {
            console.log("Tu signo es Aries");
        }
        break;

    case "05":
        if (31 >= diaNacimiento > 20) {
            console.log("Tu signo es Geminis");
        }
        else {
            console.log("Tu signo es Tauro");
        }
        break;

    case "06":
        if (30 >= diaNacimiento > 20) {
            console.log("Tu signo es Cáncer");
        }
        else {
            console.log("Tu signo es Géminis");
        }
        break;

    case "07":
        if (31 >= diaNacimiento > 22) {
            console.log("Tu signo es Leo");
        }
        else {
            console.log("Tu signo es Cáncer");
        }
        break;

    case "08":
        if (31 >= diaNacimiento > 22) {
            console.log("Tu signo es Virgo");
        }
        else {
            console.log("Tu signo es Leo");
        }
        break;

    case "09":
        if (30 >= diaNacimiento > 22) {
            console.log("Tu signo es Libra");
        }
        else {
            console.log("Tu signo es Virgo");
        }
        break;

    case "10":
        if (31 >= diaNacimiento > 22) {
            console.log("Tu signo es Escorpio");
        }
        else {
            console.log("Tu signo es Libra");
        }
        break;

    case "11":
        if (30 >= diaNacimiento > 21) {
            console.log("Tu signo es Sagitario");
        }
        else {
            console.log("Tu signo es Escorpio");
        }
        break;

    case "12":
        if (31 >= diaNacimiento > 21) {
            console.log("Tu signo es Capricornio");
        }
        else {
            console.log("Tu signo es Sagitario");
        }
        break;

    default: console.log("No eres un caballero del Zodiaco")

}

switch (signoZodiacal) {
    case "ARIES": console.log("Te representa Mu de Aries");
        break;

    case "TAURO": console.log("Te representa Aldebaran de Tauro");
        break;

    case "GEMINIS": console.log("Te representa Saga de Géminis");
        break;

    case "CANCER": console.log("Te representa DeathMask de Cáncer");
        break;

    case "LEO": console.log("Te representa Aiora de Leo");
        break;

    case "VIRGO": console.log("Te representa Shaka de Virgo");
        break;

    case "LIBRA": console.log("Te representa Dohko de Libra");
        break;

    case "ESCORPIO": console.log("Te representa Milo Escorpio");
        break;

    case "SAGITARIO": console.log("Te representa Aioros Sagitario");
        break;

    case "CAPRICORNIO": console.log("Te representa Shura Capricornio");
        break;

    case "ACUARIO": console.log("Te representa Camus Acuario");
        break;

    case "PISCIS": console.log("Te representa Afrodita Piscis");
        break;
    
        default: console.log("No eres un caballero dorado");
}