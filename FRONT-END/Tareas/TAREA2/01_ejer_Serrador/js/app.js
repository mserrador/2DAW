"use strict"

// 1) Crea un documento html que solicite al usuario un importe al usuario, y escriba en la consola el
// importe más el iva del 21%, el iva se habrá guardado previamente en una constante. El mensaje que
// debe aparecer podría ser: “El iva de la cantidad 40€ es 8,4€”

let importe = prompt(`Introduce un Importe:`);

let iva = (importe * 21)/100;

console.log(`El iva de la cantidad ${importe}€ es ${iva}€`);

