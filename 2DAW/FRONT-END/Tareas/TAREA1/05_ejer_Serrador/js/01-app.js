"use strict"
//  5) Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el 
// mensaje “Promocionado”.

let nota1 = parseInt(prompt("Introduce la primera nota"));
let nota2 = parseInt(prompt("Introduce la segunda nota"));
let nota3 = parseInt(prompt("Introduce la tercera nota"));

let promedio = (nota1+nota2+nota3)/3;

if (promedio >= 7) {
    console.log(`promocionado`);
}





