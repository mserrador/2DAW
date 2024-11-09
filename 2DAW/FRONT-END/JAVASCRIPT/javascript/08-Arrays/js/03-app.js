//métodos de un array: splice y slice
//splice permite insertar y borrar
//slice muestra

const carrito=[];

const producto={
    nombre:"raton",
    precio:10,
}

const producto1={
    nombre:"monitor",
    precio:100,
}

const producto2={
    nombre:"teclado",
    precio:10,
}

carrito.push(producto);
carrito.push(producto1);
carrito.push(producto2);

console.table(carrito);

//splice borrar elementos desde la posición incluida la misma
//splice(posicion,número de elementos);
/* carrito.splice(0,2);
console.log(carrito);
 */

//splice permite insertar
//splice (posicion,numero de elementos a borrar - 0 NO BORRA, elementos a insertar);
carrito.splice(2,0,producto,producto1);
console.log(carrito);


//slice, muestra desde la posición indicada hata el final de array
//NO muta el array original, es decir, los datos del carrito son los mismos que hubiera
//inicialmente, para ello hay que asignarlo a una variable
console.log(carrito.slice(2));
console.log(carrito);

//slice devuelve una array
let arrAux=carrito.slice(2);
console.log(arrAux);


//slice devuelve una array desde la posición 2 hasta longitud del array -1
let arrAux2=carrito.slice(2,-1);
console.log(arrAux2);


//slice devuelve una array 
//muestra la posición 1 y la 2 del array
let arrAux3=carrito.slice(1,3);
console.log(arrAux3);
