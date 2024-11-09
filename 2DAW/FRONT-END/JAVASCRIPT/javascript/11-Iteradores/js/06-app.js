//for in, itera sobre los indices de un array o sobre las propiedades de un objeto

const array=[
    {nombre:"Juan",edad:20},
    {nombre:"Antonio",edad:26},
    {nombre:"Pepe",edad:30},
    {nombre:"Maria",edad:40},
]

const coche={
    marca: "citroen",
    modelo: "picasso",
    color: "azul",
}

for (let variable in array){
    console.log(variable);
}

for (let variable in array){
    console.log(`${array[variable].nombre}`);
}

for (let variable in coche){
    console.log(variable);
}

for (let variable in coche){
    console.log(`${variable} ${coche[variable]}`);
}