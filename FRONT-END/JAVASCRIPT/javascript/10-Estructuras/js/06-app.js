//operadodr ternario

const autenticado=true;
const puedePagar=true;

//console.log( condición ? si verdad  : si falso   )
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado'  );

//como revisar dos condiciones
//Se puede usar && (and) y ||  (or)
console.log(autenticado && puedePagar ? 'si puede pagar' : 'No puede pagar');




//crear un si anidado en un ternario
//console.log(primera condición ? segunda condición ? 'si autenticado y puede pagar' : 'Si autenticado, no puede pagar' :'No esta autenticado');
console.log("veamos...");
console.log(autenticado ? puedePagar ? 'si autenticado y puede pagar' : 'Si autenticado, no puede pagar' :'No esta autenticado');