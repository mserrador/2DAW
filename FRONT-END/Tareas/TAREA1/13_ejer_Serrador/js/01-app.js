"use strict"
//  Añade al prototipo del objeto Date una función llamada añoNuevo que devuelva el número
// de días que queda hasta el 1 de Enero del siguiente año desde el día que reciba como
// parámetro (Nota. Trabajad con milisegundos). Pruébala


Date.prototype.añoNuevo = function() {

    const proximoAñoNuevo = new Date(this.getFullYear() + 1, 0, 1);
    
    const diferencia = proximoAñoNuevo - this;
    
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    
    return diasRestantes;
};


const fecha = new Date(); 
console.log(`Días restantes hasta el 1 de Enero del próximo año: ${fecha.añoNuevo()}`);