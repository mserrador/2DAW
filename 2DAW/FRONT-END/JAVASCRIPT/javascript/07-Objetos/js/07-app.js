//objeto liteal, prototipo o prototype

//objeto literal

const producto1={
    nombre1:"raton",
    precio1:10,
    disponible1:false,
}

//vamos a ver un ejemplo con prototipos
function Persona(nombre,edad){
    this.nombre=nombre,
    this.edad=edad
}

//llamo al constructor
const persona1=new Persona("pepe",15);
console.log(persona1);

Persona.prototype.infoPersona=function(){
    return `Nombre: ${this.nombre} - Edad: ${this.edad}`
}

console.log(persona1.infoPersona());

Object.prototype.mensaje=function(){
    return ("Ya veremos si te jubilas ");
}

console.log(persona1.mensaje());

console.log(persona1.__proto__);//objeto persona
console.log(persona1.__proto__.__proto__);// objeto object
console.log(persona1.__proto__.__proto__.__proto__);// NULL


