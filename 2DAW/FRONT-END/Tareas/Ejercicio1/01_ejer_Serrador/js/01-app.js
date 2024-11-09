"use strict"

/*EJERCICIO1*/
console.log("/*EJERECICIO1*/")

// Crea un objeto literal llamado misDatos con los siguientes campos: nombre, apellido y edad.
// Dentro del objeto habrá otro objeto llamado formación que tendrá los campos
// añosExperiencia y lugarTrabajoActual. A continuación realiza los siguientes pasos:
const misDatos={
    nombre:"",
    apellido:"",
    edad:"",
    formacion:{
        añosExperiencia:"",
        lugarTrabajoActual:""
    }

}

// Inicializa los campos del objeto anterior con tus datos.
misDatos.nombre='mario';
misDatos.apellido='serrador';
misDatos.edad=21;
misDatos.formacion.añosExperiencia=1;
misDatos.formacion.lugarTrabajoActual='estudiando';

// Muestra el contenido del objeto por consola.
console.log(misDatos);

// Utilizando destructuring obten los años de experiencia y el nombre para mostrarlos por consola.
const {nombre: nom, formacion: {añosExperiencia: años}}=misDatos;
console.log(nom);
console.log(años);

// Modifica cualquier campo del objeto y muestralo por consola.
misDatos.nombre='sergio';
misDatos.edad=19;
console.log(misDatos);

// Haz una copia del objeto misDatos. Modifica el valor del campo edad en dos unidades. spread operator
const misDatos2={...misDatos};
misDatos2.edad=21;

// Muestra ambos objetos por consola y comprueba que el campo edad tiene un valor
// diferente en ambos objetos.
console.log('------------------------------------------------------------------------')
console.log(misDatos);
console.log(misDatos2);

// Añade una función al objeto misDatos con el nombre mostrarInfo de forma que presente
// por consola todos los valores de los campos del objeto. Llama a la función para
// comprobar que se muestra la información correcta.

misDatos.mostrarInfo=function() {
    console.log(misDatos);
}

misDatos.mostrarInfo();

// Impide que se pueda modificar el objeto misDatos comprobando que no se pueden
// modificar valores de los campos ni añadir propiedades.

// he comentado la solucion porque daba error, pero se hace asi:
/*Object.freeze(misDatos);
misDatos.nombre = "mario";
console.log(misDatos);*/










