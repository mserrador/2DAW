//unir objetos, spread operator (se usa mucho en REACT)


const producto={
    nombre:"silla",
    precio:50,
    disponible:true,
}


const producto1={
    nombre1:"raton",
    precio1:10,
    disponible1:false,
}

//unir objetos con el metodo assign
const resultado=Object.assign(producto,producto1);
console.log(resultado);

//unir objetos con el spread operator
//si los atributos de ambos objetos se llaman igual
//mofica los valores del primer objeto
const resultado2={...producto,...producto1}
console.log(resultado2);