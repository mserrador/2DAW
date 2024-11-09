"use strict"
// 11) Define la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:

// a) Objeto Persona con las propiedades nombre, edad y género, y el método obtenerDetalles(), que muestra por pantalla las propiedades de la persona.
function Persona(Nombre,Edad,Genero) {
    this.nombre = Nombre,
    this.edad = Edad,
    this.genero = Genero

};
Persona.prototype.obtenerDetalles = function() {
    console.log(`El nombre de la persona es: ${this.nombre}, su edad es: ${this.edad} y su genero es: ${this.genero}`);
};

// b) Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo
function Estudiante(Nombre,Edad,Genero,Curso,Grupo) {
    Persona.call(this, Nombre, Edad, Genero);
    this.curso = Curso,
    this.grupo = Grupo
};
// Herencia de los prototipos de Persona a Estudiante
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

// c) Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel.
function Profesor(Nombre,Edad,Genero,Asignatura,Nivel) {
    Persona.call(this, Nombre, Edad, Genero);
    this.asignatura = Asignatura,
    this.nivel = Nivel
};
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor

// d) Crea un profesor y un estudiante.
const estudiante1 = new Estudiante("Juan", 18, "Masculino", "2", "DAW");
console.log(estudiante1);

const profesor1 = new Profesor("Matias", 56, "Masculino", "educacion fisica", "cuarto de la eso");
console.log(profesor1);


