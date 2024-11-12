// 3) Crea un documento html que solicite al usuario un número y se escriba en la consola la suma de los
// números del 1 al número introducido (por ejemplo: si introduce un 4, escribirá en el documento "La
// suma de los números del 1 al 4 es 10"). Comprueba previamente que han introducido un número y
// no una letra, para ello investiga el uso de la función isNaN, y muestra un error en este caso.

console.log(`funciona`);

let num = prompt(`introduce un numero:`);
let total = 0;
if (isNaN(num)) {
    console.log(`${num} no es un numero`);
} else if (!isNaN(num)) {
    
    for (let i = 1; i <= num; i++) {
        total = total + i;
    };
    console.log(`La suma de los numeros del 1 al ${num} es ${total}`);
};


