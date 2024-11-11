"use strict"
// Añade al prototipo del objeto Array una función llamada cuantasVecesEsta que devuelva el
// número de veces que está un número dado en un array. Pruébala.


Array.prototype.cuantasVecesEsta = function (numero) {
    let contador = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === numero) {
            contador++;
        };
    };
    console.log(`el numero ${numero} aparace ${contador} veces`);
};

const pruebaArray = [8,4,6,9,1,1,1,1,1,2,4,4,4,4,7];

pruebaArray.cuantasVecesEsta(1);