//operador && (se deben de cumplir todas las condiciones)

const usuario=true;
const contrasena=true;

if (usuario && contrasena){
    console.log('Usuario logeado');
}else{
    console.log('Usuario no logeado');
}

//operador OR (se debe de cumplir una condición)

const efectivo=300;
const credito=1000;
const disponible= efectivo+credito;
const totalPagar=600;

if (efectivo > totalPagar || credito> totalPagar || disponible > totalPagar){
    console.log('Puedes pagar')
}else{
    console.log('No tienes dinero suficiente')
}

//Otra forma de utilizar el operador ||

const var1=undefined;
//const var1=20;
const port=var1 || 3000; //si el primer valor es true, devuelve ese valor, en caso contrario devuelve el otro
console.log(port); //devuelve 3000 porque var1 no esta definido, si estuviera definido devolvería su valor


