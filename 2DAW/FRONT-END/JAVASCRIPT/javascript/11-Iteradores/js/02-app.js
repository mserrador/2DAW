//break, continue

//continue
for (let i=0;i<=10;i++){
    if (i==5){
        continue;
   
    }
    console.log(`Numero ${i}`)
}

//break
for (let i=0;i<=10;i++){
    if (i==5){
        break;
    }
    console.log(`Numero ${i}`)
}


const array=[
    {nombre:"Juan",edad:20},
    {nombre:"Antonio",edad:26},
    {nombre:"Pepe",edad:30},
    {nombre:"Maria",edad:40},
]

for (let j=0;j<array.length;j++){
    if (array[j].edad<=29){
        continue;
    }
    console.log(array[j].nombre);
    console.log(array[j].edad);
}
