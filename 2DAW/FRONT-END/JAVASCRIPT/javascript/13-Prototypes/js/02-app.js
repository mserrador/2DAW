const EDADJUBILACION = 65;


//objeto literal
let Persona = {
	nombre   : "Felipe",
	apellido : "Garrido",
	edad     : 40,
	jubilacion : function (){
		return (EDADJUBILACION - this.edad);
	}
}

console.log(`${Persona.nombre} ${Persona.apellido} tiene ${Persona.edad} años y le quedan ${Persona.jubilacion()} años para jubilarse`);

//añado la propiedad estatura al objeto
Persona.estatura = 175;

console.log(`${Persona.nombre} ${Persona.apellido} tiene ${Persona.edad} años y mide ${Persona.estatura} centímetros`);

console.log(Persona);

console.log(Persona.__proto__);
console.log(Persona.__proto__.__proto__);

 console.log(Object.getPrototypeOf(Persona));
 // Objeto: Persona Prototipo: Object  -->  Prototipo NULL


// El prototipo base es Object por lo que lo modifico y le añado la función mensaje
Object.prototype.mensaje = function () {
	
		return ("Veremos a ver si no te jubilas a los 80");
}

console.log(Persona.mensaje());



