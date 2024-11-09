"use strict"

// 9) Haz lo mismo que en el ejercicio anterior, pero mediante la definición de un constructor de
// objetos (prototipo)
function Personax(Nombre, Apellidos, Edad) {
    this.nombre = Nombre,
    this.apellidos = Apellidos,
    this.edad = Edad
};
const juanito = new Personax("Juanito","Perez",45);

Personax.prototype.jubilacion = function() {
    let quedanx = 65 - this.edad;
    return quedanx;
}

console.log(`${juanito.nombre} tiene ${juanito.edad} anyos y le quedan ${juanito.jubilacion()} para jubilarse `);

Personax.prototype.estatura = "170cm";
console.log(`${juanito.nombre} tiene ${juanito.edad} anyos y mide ${juanito.estatura}`);

console.log(juanito.__proto__);

Personax.prototype.mensaje = function () {
    console.log(`Ya veremos si te jubilas o no`)
}
juanito.mensaje();

const fulanito = {...juanito};
fulanito.nombre = "Fulanito";
console.log(fulanito);






