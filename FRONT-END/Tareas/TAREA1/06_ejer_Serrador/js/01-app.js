"use strict"
// 6) Solicitar el ingreso de alguna de las siguientes palabras: casa, mesa, perro y gato. Si la 
// palabra introducida es correcta, debe devolver la correspondiente palabra en inglés, en caso 
// contrario debe de indicar “La palabra introducida es incorrecta”.

let palabra = prompt("Introduce la palabra");

if (palabra == "casa") {
    console.log(`House`);
} else if (palabra == "mesa") {
    console.log(`Table`);
} else if (palabra == "perro") {
    console.log(`Dog`);
} else if (palabra == "gato") {
    console.log(`Cat`);
} else {
    console.log(`La palabra introducida es incorrecta`);
}











