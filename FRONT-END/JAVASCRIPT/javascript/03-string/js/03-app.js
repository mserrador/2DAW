//concatenar cadenas
const p1="ordenador hp";
const precio="400€";

console.log(p1.concat(precio));

console.log(p1 + " tiene un precio " + precio);

console.log(2 + 2);

//otra forma
console.log("El producto ", p1 , " tiene un precio de " , precio);

//mejor opción para concatenar es con TEMPLATE STRING
console.log(`El producto ${p1} tiene un precio de ${precio}`);

