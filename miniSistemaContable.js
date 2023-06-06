//MINI SISTEMA CONTABLE
const sueldoXDia = 156.78;

class empleado{
    //Parametros
    nombre = "";
    edad = 0;
    RFC = "";
    dias = 0;
    sueldoXDia = 0;
    //Constructor
    constructor(nombre, edad, RFC, dias, sueldoXDia){
        this.nombre = nombre;
        this.edad = edad;
        this.RFC = RFC;
        this.dias = dias;
        this.sueldoXDia = sueldoXDia;
    }

    //Metodos
    imprimirInfoEmpleado(){
        console.log("El nombre del empleado es:", this.nombre);
        console.log("La edad del empleado es:", this.edad, "años");
        console.log("El RFC del empleado es:", this.RFC);
        console.log("El emplado trabajó:", this.dias, "dias.");
        console.log("\n");
    }
    calcularSueldo(){
        const isr = 0.31;
        const semanasQuincena = 2;
        const semanasMes = 4;

        let sueldoNetoMensual;
        let sueldoNetoQuincenal;
        let sueldoBrutoMensual;
        let sueldoBrutoQuincenal;

        sueldoBrutoQuincenal = (this.dias * this.sueldoXDia) * semanasQuincena;
        sueldoNetoQuincenal = sueldoBrutoQuincenal - (sueldoBrutoQuincenal*isr);

        sueldoNetoMensual = (this.dias * this.sueldoXDia) * semanasMes;
        sueldoBrutoMensual = sueldoNetoMensual - (sueldoNetoMensual*isr);

        console.log("El sueldo Bruto quincenal de",this.nombre, "es: $", sueldoBrutoQuincenal);
        console.log("El sueldo Neto quincenal de",this.nombre, "es: $", sueldoNetoQuincenal);
        
        console.log("El sueldo Bruto Mensual de",this.nombre, "es: $", sueldoNetoMensual);
        // console.log("El sueldo Neto Mensual de",this.nombre, "es: $", sueldoBrutoMensual);
        console.log("El sueldo neto Mensual es: ", sueldoBrutoMensual);
        console.log("\n");
    }
}

//Instancias de Trabajadores
let gustavo = new empleado("Gustavo", 27, "MAGG950506GN1", 7, sueldoXDia);
let juanito = new empleado("Juanito", 35, "JJJJ950506GN1", 2, sueldoXDia);
let miguelito = new empleado("Miguelito", 22, "MMMM950506GN1", 5, sueldoXDia);
let pepe = new empleado("Pepe", 45, "PEPE950506GN1", 6, sueldoXDia);
let panchito = new empleado("Panchito", 30, "PAPA950506GN1", 4, sueldoXDia);

//Mostrar dstos de empleados y sueldos
gustavo.imprimirInfoEmpleado();
gustavo.calcularSueldo();
juanito.imprimirInfoEmpleado();
juanito.calcularSueldo();
miguelito.imprimirInfoEmpleado();
miguelito.calcularSueldo();
pepe.imprimirInfoEmpleado();
pepe.calcularSueldo();
panchito.imprimirInfoEmpleado();
panchito.calcularSueldo();