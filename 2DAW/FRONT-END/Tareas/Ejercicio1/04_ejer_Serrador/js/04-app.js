"use strict"

// Crea un objeto literal llamado persona que contendrá los campos nombre, apellido y edad.
// También tendrá una función llamada jubilación que devolverá los años que le faltan para
// jubilarse. Se supone que una persona puede jubilarse si ha cumplido los 65 años.
// Compruébalo mostrando por consola el resultado. A continuación haz los siguientes pasos:

const Persona = {
    nombre:"Juan",
    apellido:"Garcia",
    edad:25,
    jubilacion: function() {
        let anyos = 65 - this.edad;
        console.log(`le quedan ${anyos} anyos para jubilarse`);
    }
};

Persona.jubilacion();

// Añade al objeto el campo estatura en cm.
Persona.estatura = "172cm";
console.log(Persona.estatura);

//Mediante un prototipo, crea una función llamada mensaje que muestre por consola todos
// los datos del objeto.

// da error porque no hemos hecho una clase en si si no un objeto y por lo tanto prototype no funciona

/*Persona.prototype.mensaje = function () {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
    console.log(this.estatura);
};*/



