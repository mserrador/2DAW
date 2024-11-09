//metodos para objetos, object keys, values, entries

const producto={
    nombre:"raton",
    precio:10,
    disponible:true,
}

//devuelve un vector las propiedades del objeto
//tambien permite saber si un objeto o la consulta a una base de datos
//esta vacias
console.log(Object.keys(producto));

//devuelve en forma de vector los valores de las propiedades del objeto
console.log(Object.values(producto));


//devuelve todo en forma de vector
console.log(Object.entries(producto));


console.log(producto.__proto__);//objeto object
console.log(producto.__proto__.__proto__);// objeto NULL
//console.log(producto.__proto__.__proto__.__proto__);// ERROR
