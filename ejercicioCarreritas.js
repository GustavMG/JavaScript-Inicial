var corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

//Posiciones en la primer vuelta
console.log("Posiciones en la primera vuelta")
console.log("Primer lugar:" + corredores[0]);
console.log("Segundo lugar:" + corredores[1]);
console.log("Tercer lugar:" + corredores[2]);
console.log("Cuarto lugar:" + corredores[3]);
console.log("Quinto lugar:" + corredores[4]);
console.log("\n");

//Jorge adelanta a Roberto
corredores.unshift("Jorge");    //Jorge, Roberto, Andrea, Jorge, Ramiro, Sofia
corredores.splice(3,1);

//Ramiro adelanta a Roberto
corredores.unshift("Ramiro");   //Ramiro, Jorge, Roberto, Andrea, Sofia
corredores.splice(4,1);

//Roberto se lesiona y sale de la carrera
corredores.splice(2,1);         //Ramiro, Jorge, Andrea, Sofia

//Andrea baja una posición
corredores.push("Andrea");      //Ramiro, Jorge, Andrea, Sofia, Andrea
corredores.splice(2,1);         //Ramiro, Jorge, Sofia, Andrea

//El quinto lugar es reemplazado por José
corredores.push("José");        //Ramiro, Jorge, Sofia, Andrea, José


// ¿Como quedan las posiciones despues de esas 3 vueltas?
console.log("Posiciones despues de las 3 vueltas")
console.log("Primer lugar:" + corredores[0]);
console.log("Segundo lugar:" + corredores[1]);
console.log("Tercer lugar:" + corredores[2]);
console.log("Cuarto lugar:" + corredores[3]);
console.log("Quinto lugar:" + corredores[4]);