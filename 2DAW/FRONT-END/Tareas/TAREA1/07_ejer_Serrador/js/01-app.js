"use strict"
// 7) Desarrollar un programa que permita la carga de 5 valores por teclado utilizando una única 
// variable para dichos valores y muestre la suma de los mismos.

let total = 0;
let num = 0;
for (let i = 0; i<5;i++) {
    num = parseInt(prompt("Introduce un numero"));
    total = total + num;
}

console.log(`El total es ${total}`);









