//repeat, split, toUpperCase, toLowerCase, toString, endWith, startWith
//split, rompe un string usando un caracter delimitador y construye un
//array con las caracteres generados

const var2="cadena de texto";

//método repeat
const var3="voy a repetir la cadena".repeat(4);
console.log(`${var2} ${var3}`); 

console.log (var3);

//método split, divide un string por el caracter que se quiera
//y lo introduce en un array
const var4="leer,correr,jugar,caminar";

console.log(var4.split(" "));
console.log(var4.split(",")[3]); //una vez separado por el caracter "," me quedo con la posición 3

//para pasar mayúsculas
const cadena2="paso a mayusculas";
console.log(cadena2.toUpperCase());

//para pasar minúsculas
const cadena3="PASO A minusculAS";
console.log(cadena3.toLowerCase());

//convertir numero a cadena
const precio=400;
let precioAux=precio.toString();
console.log(typeof precioAux);

//
//devuelve true si la cadena finaliza en "lAS"
//en caso contrario devuelve false
console.log(cadena3.endsWith("lAS"));

//devuelve true si la cadena empieza por "PASO"
//en caso contrario devuelve false
console.log(cadena3.startsWith("PASO"));







