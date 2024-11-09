//SELLAR OBJETOS con seal
"use strict";

const producto={
    nombre:"silla",
    precio:50,
    disponible:true,
}


//seal, no se puede añadir ni quitar propiedades
//si se pueden modificar el valor de las propiedades
//esta es la diferencia con el freeze
Object.seal(producto);

producto.nombre="raton"; //permite modificar el valor de la propiedad
console.log(producto);
//producto.color="marron"; //me devuelve un error porque esta sellado el objeto
console.log(Object.isSealed(producto));







