//ordenar un array 
//sort
//reverse

const meses=["enero","febreo","marzo","abril"];

console.log(meses.sort());
console.log(meses.reverse());


const numeros=[5,4,20,18,1,40,41];

//si queremos ordenar un array de números
//tenes que usar una función de comparación con el sort
//pq considera a los números como string
console.log(numeros.sort());

//solución:
console.log(numeros.sort((a,b)=>a-b));

const carrito=[
    {producto:"monitor", precio:40},
    {producto:"raton", precio:20},
    {producto:"mesa", precio:34},
    {producto:"silla", precio:10}
]

console.log(carrito.sort((a,b)=>{
    if (a.precio > b.precio){
        return 1;
    }
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
}))








