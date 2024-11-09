"use strict"

// 10) Haz lo mismo que en el ejercicio anterior, pero mediante el uso de clases.

class Personac {
    constructor (Nombre,Apellidos,Edad) {
        this.nombre = Nombre,
        this.apellidos = Apellidos
        this.edad = Edad
    }
    jubilacion() {
        let quedanx = 65 - this.edad;
        return quedanx;
    }
}

const jose = new Personac("jose", "serrador", 58);

console.log(`${jose.nombre} tiene ${jose.edad} anyos y le quedan ${jose.jubilacion()} para jubilarse `);

Personac.prototype.estatura = "180cm";
console.log(`${jose.nombre} tiene ${jose.edad} anyos y mide ${jose.estatura}`);

console.log(jose.__proto__);
console.log(jose.__proto__.__proto__);
Object.prototype.mensaje = function () {
    return "Ya veremos si te jubilas o no"
};

console.log(jose.mensaje());








