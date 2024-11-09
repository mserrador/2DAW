"use strict"

//pido información al usuario a través del navegador
let nombres=prompt('Cual es tu nombre')

document.getElementById('contenido').innerHTML=`${nombres} estas aprendien JS`;


//mensajes por consola: 
console.error("mensaje de error");

console.info("mensaje informavito");

console.debug("mensaje debug");

console.clear(); 

console.warn("Aviso, no esta usando el modo estricto");

//creación de un objeto estático
const persona={
    name: "angel",
    rol: "alumno",
    ies: "dos mares",
};

console.table(persona);


//como saber el tiempo de ejecución
//time y timeEnd
console.time('hola');
console.warn("Bienvenido");
console.warn("Antonio")
console.timeEnd('hola');


//permite saber cuantas veces se ejecuta una función
//count
console.count();
console.count('etiqueta');
console.count('etiqueta');
console.count('etiqueta');
console.count('etiqueta');
console.count();

//comenta una línea

/*

comenta un bloque de código

*/




