//string es un método primitivo junto a number, bingint, boolean,
//symbol, null y undefined
"use strict";

//veamos las tres formas de crear un string
const texto="Hola a todos"; //método más común
const texto2=String("Hola a todos"); 
const texto3=new String("Hola a todos"); //crea un vector a partir de la cadena

console.log(texto);
console.log(texto2);
console.log(texto3);
console.log(texto3[3]);


console.log(typeof texto);
console.log(typeof texto2); 
console.log(typeof texto3); //devuelve que es un objeto

//los objetos son siempre true en un if. Cuidado con esto!!!
if (texto3){
    alert ("texto3 es verdadero");
}
