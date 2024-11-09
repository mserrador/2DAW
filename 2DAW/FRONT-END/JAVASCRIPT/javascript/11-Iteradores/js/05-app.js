//for of, itera sobre un array mostrando los valores
//NO itera sobre objetos

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

for (let variable of array){
    console.log(variable);
}

for (let variable of array){
    console.log(variable.nombre);
    console.log(variable.edad);
}

//No permite iterar dentro de un objeto
for (let variable of coche){
    console.log(variable);
}

