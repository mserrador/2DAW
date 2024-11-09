//includes para vectores
//some para array 

const meses=['enero','febrero','marzo','abril'];

const personas=[
    {nombre:"Juan",edad:20},
    {nombre:"Antonio",edad:26},
    {nombre:"Pepe",edad:30},
    {nombre:"Maria",edad:40},
]

const persona1={
    nombre:"Juan",
    edad:20,
}

//includes devuelve: true o false
const resultado=meses.includes('enero');
console.log(resultado);

//includes (elemento a Buscar,desde que posición)
//la posicion es opcional
const resultado2=meses.includes('abril',3);
console.log(resultado2);

//some, se usa para un array 
//devuelve true si algún elemento de la matriz
//cumple la condición
//some recibe como parámetro un callback
const existe=personas.some(perso=>{
    return perso.edad==26;
})

console.log(existe);

