"use strict"

/*EJERECICIO2*/
console.log("/*EJERECICIO2*/")

// Crea un objeto literal llamado misDatos con los siguientes campos: nombre, apellido y edad.
// Dentro del objeto habrá otro objeto llamado formación que tendrá los campos
// añosExperiencia y lugarTrabajoActual. A continuación realiza los siguientes pasos:

Object.nombre="";
Object.apellido="";
Object.edad=0;
const formacion={
    anyosExperiencia:0,
    lugarTrabajoActual:""
};
Object.formacion=formacion;

// Inicializa los campos del objeto anterior con tus datos. 

Object.nombre="Mario";
Object.apellido="Serrador";
Object.edad=21;
Object.formacion.anyosExperiencia= 1;
Object.formacion.lugarTrabajoActual= "IES DOS MARES";

//  Muestra el contenido del objeto por consola.

console.log(Object.nombre);
console.log(Object.apellido);
console.log(Object.edad);
console.log(Object.formacion.anyosExperiencia);
console.log(Object.formacion.lugarTrabajoActual);

// Utilizando destructuring obten los años de experiencia y el nombre para mostrarlos por
// consola.

const {nombre:nomOb,formacion:{anyosExperiencia:anyos}}=Object;
console.log(nomOb,anyos);

// Modifica cualquier campo del objeto y muestralo por consola.

console.log(Object.edadd=50);

// Haz una copia del objeto misDatos. Modifica el valor del campo edad en dos unidades.
// Muestra ambos objetos por consola y comprueba que el campo edad tiene un valor
// diferente en ambos objetos.

// da error
/*const Object2 = {...Object};
console.log(object.edad,Object2.edad=52);*/

// Añade una función al objeto misDatos con el nombre mostrarInfo de forma que presente
// por consola todos los valores de los campos del objeto. Llama a la función para
// comprobar que se muestra la información correcta.

Object.mostrarInfo= function(){
    console.log(Object.nombre);
    console.log(Object.apellido);
    console.log(Object.edad);
    console.log(Object.formacion.anyosExperiencia);
    console.log(Object.formacion.lugarTrabajoActual);
};

Object.mostrarInfo();

// Impide que se pueda modificar el objeto misDatos comprobando que no se pueden
// modificar valores de los campos ni añadir propiedades.

// he comentado la solucion porque daba error, pero se hace asi:
/*Object.freeze(Object);
Object.nombre = "mario";
console.log(Object);*/