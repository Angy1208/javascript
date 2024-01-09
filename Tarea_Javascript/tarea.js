/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean */
var nombreAlumno = "Raul";
var edadRaul = 20;
var edadAngel = 30;
var materiasCursadas = 31;
var materiasReprobadas = 3;
var esRaulEstudiante = true;
var materiaFavorita = "Matemáticas";
var materiaNoFavorita = "Español";
var marcaSalchichas = "FUD";
var marcaHuevos = "San Juan";
var marcaTortillas = "Doña Sara";
var nombreProfesor = "Angel";
var maracaAlternaSalchichas = "Chimex";
var marcaAlternaHuevos = "Economico";
var marcaAlternaTortillas = "Don Pepe";
var raulBuenAlumno = false;
var angelBuenProfesor = true;
var angelEsEstudiante = false;
var angelEsProfesor = true;
var raulEsProfesor = false;
var platonEstaVivo = false;
var platonHaMuerto = true;
var carlosBremerEstaVivo = false;
var bremerHaMuerto = true;
var precioKgTortillas = 23;
var kgNecesariosDeTortillas = 5;
var precioKgHuevos = 48;
var kgNecesariosDeHuevos = 4;
var precioKgSalchicha = 120;
var kgNecesariosSalchicha = 2;

/**Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division */
var gastoEnTortillas = precioKgTortillas * kgNecesariosDeTortillas;
console.log("Gasto en Tortillas: " + gastoEnTortillas);
var gastoEnHuevo = precioKgHuevos * kgNecesariosDeHuevos;
console.log("Gasto en Huevo: " + gastoEnHuevo);
var gastoEnSalchicha = precioKgSalchicha * kgNecesariosSalchicha;
console.log("Gasto En Salchicha: " + gastoEnSalchicha);
var gastoTotal = gastoEnHuevo + gastoEnSalchicha + gastoEnTortillas;
console.log("Gasto Total: " + gastoTotal);
var gastoPromedio = gastoTotal / 3;
console.log("Gasto Promedio de los 3 Ingredientes: " + gastoPromedio);
var diferenciaEdad = edadAngel - edadRaul;
console.log("Angel es mayor que Raul por:" + diferenciaEdad + "años");

//Declarar variables que concatenen cadenas de texto 
var materias = materiaFavorita + materiaNoFavorita;
console.log(materias);
var marcasHuevo = marcaHuevos + marcaAlternaHuevos;
console.log(marcasHuevo);
var marcasSalchicha = marcaSalchichas + maracaAlternaSalchichas;
console.log(marcasSalchicha);
var marcasTortillas = marcaTortillas + marcaAlternaTortillas;
console.log(marcasTortillas);

//Declarar 5 variables y convertirlas a otro tipo de dato
let edadRaulString = String(edadRaul);
console.log("Tranformacion edad de Raul a String: " + edadRaulString);
let edadAngelString = String(edadAngel);
console.log("Tranformacion edad de Angel a String: " + edadAngelString);
let nombreAlumnoBoolean = Boolean(nombreAlumno);
console.log("Transformacion Nombre del Alumno a Boolean: " + nombreAlumnoBoolean);
let nombreProfesorNumber = Number(nombreProfesor);
console.log("Transformacion Nombre del Profesor a Number: " + nombreProfesorNumber);
let gastoTotalBoolean = Boolean(gastoTotal);
console.log("Transformación Gasto Total en Boolean: " + gastoTotalBoolean);