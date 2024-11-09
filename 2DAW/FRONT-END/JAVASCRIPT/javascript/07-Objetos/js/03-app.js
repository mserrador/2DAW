//CONGELAR OBJETOS. Reasignar objetos
//Operador SPREAD, se usa mucho en REACT
"use strict";

const producto={
    nombre:"silla",
    precio:50,
    disponible:true,
}

//Reasignación del valor
producto.nombre="mesa";
console.log(producto);

//eliminar un objeto
delete producto.precio;
console.log(producto);

//Congelar un objeto
//Object.freeze(producto);
producto.nombre="silla";

//Para saber si un objeto esta congelado
console.log(Object.isFrozen(producto));

//REASIGNACIÓN DE UN OBJETO
const producto2=producto;
producto2.nombre="raton";

console.log(producto);
console.log(producto2);

//operador SPREAD, se usa mucho en REACT
//Object.freeze(producto);
const producto3={...producto}; 
producto3.nombre="monitor"; //se mantiene el valor del objeto producto y modifico el de producto3

//producto.nombre="monitorrrrrr";
console.log(producto);
console.log(producto3);










