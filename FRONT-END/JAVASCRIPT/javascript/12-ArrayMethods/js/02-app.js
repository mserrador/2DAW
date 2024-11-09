//findIndex
//devuelve la posición del primer elemento que
//cumple la condición
//en caso contrario devuelve -1

const meses=['enero','febrero','marzo','abril'];

const personas=[
    {nombre:"Juan",edad:20},
    {nombre:"Antonio",edad:26},
    {nombre:"Pepe",edad:30},
    {nombre:"Maria",edad:40},
]

const indice=meses.findIndex(mes=>mes=="febrero");
console.log(indice);

const indice2=personas.findIndex(({edad=personas})=>edad==26);
console.log(indice2);

const indice3=personas.findIndex(({edad})=>edad==26);
console.log(indice3);



