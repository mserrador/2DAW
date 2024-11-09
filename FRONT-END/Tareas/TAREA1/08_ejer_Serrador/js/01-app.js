"use strict"

/* ]8) Crea un objeto de forma literal llamado Persona con los siguientes atributos:
 a) Nombre, apellidos, edad (dale un valor a cada uno de ellos)
 b) Añade dentro del objeto una función  que nos devuelva el número de años que le queda a
 la persona para jubilarse. La edad máxima de jubilación será de 65 años.
 c) A continuación, muestra por consola un mensaje del tipo “xxxx tiene xx años y le 
quedan xxxx para jubilarse”
 d) Añade una nueva propiedad llamada estatura con un valor. Muestra de nuevo un mensaje
 del tipo “xxxx tiene xx años y mide xxx centímetros”.
 e) Localiza la cadena de prototipos hasta llegar al prototipo base.
 f) Añade al prototipo inmediatamente inferior de la cadena de prototipos una función 
llamada “mensaje” que devuelva el texto “Ya veremos si te jubilas o no”. Muestra a 
continuación dicho mensaje desde el objeto persona.
 g) Copia el objeto y modifica el nombre. Comprueba que se ha modificado el objeto 
correcto.*/

// a) Nombre, apellidos, edad (dale un valor a cada uno de ellos)

const Persona = {
    Nombre:"Mario",
    Apellidos:"Serrador",
    Edad:21,
   
};
// b) Añade dentro del objeto una función  que nos devuelva el número de años que le queda a
// la persona para jubilarse. La edad máxima de jubilación será de 65 años.

Persona.jubilacion = function() {
    let quedan = 65 - this.Edad;
    return quedan;
};

// c) A continuación, muestra por consola un mensaje del tipo “xxxx tiene xx años y le 
// quedan xxxx para jubilarse”

console.log(`${Persona.Nombre} tiene ${Persona.Edad} años y le quedan ${Persona.jubilacion()} para jubilarse`);

//  d) Añade una nueva propiedad llamada estatura con un valor. Muestra de nuevo un mensaje
// del tipo “xxxx tiene xx años y mide xxx centímetros”.

Persona.Estatura = 185;

console.log(`${Persona.Nombre} tiene ${Persona.Edad} años y mide ${Persona.Estatura}cm`);

//  e) Localiza la cadena de prototipos hasta llegar al prototipo base.

console.log(Persona.__proto__);

// f) Añade al prototipo inmediatamente inferior de la cadena de prototipos una función 
// llamada “mensaje” que devuelva el texto “Ya veremos si te jubilas o no”. Muestra a 
// continuación dicho mensaje desde el objeto persona.

Object.prototype.mensaje=function(){
    return ("Ya veremos si te jubilas ");
}
console.log(Persona.mensaje());

// g) Copia el objeto y modifica el nombre. Comprueba que se ha modificado el objeto 
// correcto.

const Persona2 = {...Persona};
Persona2.Nombre = "Sergio";
console.log(Persona);
console.log(Persona2);







