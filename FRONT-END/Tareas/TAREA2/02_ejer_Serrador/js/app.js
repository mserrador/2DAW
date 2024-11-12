// 2) Crea un documento html que solicite al usuario tres números por separado (utiliza el método
// prompt), y se escriba en la consola el primer número al cuadrado, el segundo al cubo y el tercero a la
// cuarta. Luego, decrementa en una unidad cada uno de ellos, para, finalmente mostrar la suma de los
// tres.

let num1 = prompt("Introduce el primer numero:");
let num2 = prompt("Introduce el segundo numero:");
let num3 = prompt("Introduce el tercer numero:");

console.log(`el primer numero al cuadrado es ${num1 ** 2}`);
console.log(`el segundo numero al cubo es ${num2 ** 3}`);
console.log(`el tercer numero a la cuarta es ${num3 ** 4}`);

console.log(`la suma de los 3 numeros despues de haberles restado 1 unidad es: ${(num1-1)+(num2-1)+(num3-1)}`);
