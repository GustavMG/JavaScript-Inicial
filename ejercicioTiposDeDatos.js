var1 = false;
var2 = true;
var3 = 0;
var4 = 1;
var5 = "0";
var6 = "000";
var7 = "1";
var8 = NaN;
var9 = Infinity;
var10 = -Infinity;
var11 = "";
var12 = "12";
var13 = "Twenty";
var14 = null;
var15 = undefined;




console.log("El tipo de dato de la variable 01 false es: " + typeof(var1)); //Boolean
console.log("El tipo de dato de la variable 02 true es: " + typeof(var2));  //Boolean
console.log("El tipo de dato de la variable 03 0 es: " + typeof(var3));     //Number
console.log("El tipo de dato de la variable 04 1 es: " + typeof(var4));     //Number
console.log('El tipo de dato de la variable 05 "0" es: ' + typeof(var5));   //String
console.log('El tipo de dato de la variable 06 "000" es: ' + typeof(var6)); //String
console.log('El tipo de dato de la variable 07 "1" es: ' + typeof(var7));   //String
console.log("El tipo de dato de la variable 08 NaN es: " + typeof(var8));   //Number
console.log("El tipo de dato de la variable 09 Infinity es: " + typeof(var9));  //Number
console.log("El tipo de dato de la variable 10 -Infinity es: " + typeof(var10));//Number
console.log('El tipo de dato de la variable 11 ""es: ' + typeof(var11));    //String
console.log('El tipo de dato de la variable 12 "12" es: ' + typeof(var12)); //String
console.log('El tipo de dato de la variable 13 "Twenty" es: ' + typeof(var13)); //String
console.log("El tipo de dato de la variable 14 null es: " + typeof(var14)); //object
console.log("El tipo de dato de la variable 15 undefined es: " + typeof(var15));    //Undefined

//      EJERCICIO DE JUGUETERIA

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
