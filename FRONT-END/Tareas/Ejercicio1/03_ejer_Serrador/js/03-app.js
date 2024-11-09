"use strict"

/*EJERCICIO 3*/

//Crea un objeto literal llamado misDatos con los siguientes campos: nombre, apellido y edad.
// Dentro del objeto habrá otro objeto llamado formación que tendrá los campos
// añosExperiencia y lugarTrabajoActual. A continuación realiza los siguientes pasos:

function misDatos(nombre,apellido,edad,formacion){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.formacion=formacion;
}

// Inicializa los campos del objeto anterior con tus datos. 

const formacion={
    añosExperiencia:1,
    lugarTrabajoActual:"IES DOS MARES"
}

const misDatos1 = new misDatos("mario","serrador",21,formacion);

// Muestra el contenido del objeto por consola.

console.log(misDatos1);

// Utilizando destructuring obten los años de experiencia y el nombre para mostrarlos por
// consola.

const {nombre: nom, formacion:{añosExperiencia: años}}=misDatos1;
console.log(nom, años);

// Modifica cualquier campo del objeto y muestralo por consola.

misDatos1.nombre = "Sergio";
console.log(misDatos1.nombre);

// Haz una copia del objeto misDatos. Modifica el valor del campo edad en dos unidades.
// Muestra ambos objetos por consola y comprueba que el campo edad tiene un valor
// diferente en ambos objetos.

const misDatos1Copia = {...misDatos1};
misDatos1Copia.edad = misDatos1Copia.edad + 2;

console.log(misDatos1);
console.log(misDatos1Copia);

// Añade una función al objeto misDatos con el nombre mostrarInfo de forma que presente
// por consola todos los valores de los campos del objeto. Llama a la función para
// comprobar que se muestra la información correcta.

misDatos.prototype.mostrarInfo = function () {
    console.log(this.nombre)
    console.log(this.apellido)
    console.log(this.edad)
    console.log(this.formacion.añosExperiencia)
    console.log(this.formacion.lugarTrabajoActual)
};

misDatos1.mostrarInfo(misDatos1);

// Impide que se pueda modificar el objeto misDatos comprobando que no se pueden
// modificar valores de los campos ni añadir propiedades.

Object.freeze(misDatos1);
misDatos1.nombre= "";
