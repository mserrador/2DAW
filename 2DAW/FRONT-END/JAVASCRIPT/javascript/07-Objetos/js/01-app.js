//objetos literales y destructuring
//new Object / comparar objetos

//Un objeto es una colección de variables y funciones agrupadas bajo una estructura
//Se componen de propiedades y métodos
//Las propiedades son pares clave:valor
//Los valores de las propiedades de un objeto se pueden modifciar
//Se pueden añadir propiedades y eliminar propiedas

//vamos a ver los datos de un producto
const nombre1="decodificador";
const precio1=200;
const disponible=true;

//Objeto Literal
const producto={
    nombre:"decodificador",
    precio:200,
    disponible:true,
}

console.log(producto);

//acceder a un campo del objeto
console.log(producto.nombre);
console.log(producto.precio);  //más común
console.log(producto['disponible']);

//añadir un campo
producto.color="rojo";
console.log(producto);

//borro un campo con delete
delete producto.disponible;
console.log(producto);

//desestructurar
const {nombre: n, precio}=producto;
console.log(n);
console.log(precio);

//También se pueden crear objetos con el tipo core Object 
//Los tipos core son: Object, String, Number y Array
//Object:
let coche=new Object({
    marca:"opel",
    color:"amarillo",
})

//añadir un nuevo campo
coche.disponible=true;

console.log(coche);

//comparar objetos
let coche1=new Object({
    marca:"opel",
    color:"amarillo",
})

let coche2=new Object({
    marca:"opel",
    color:"amarillo",
})

//Al ser referencias distintas, los objetos no son iguales
if (coche1===coche2){
    console.log("Los coches son iguales");
}else{
    console.log("Los coches no son iguales");

}

//¿cómo solucinarlo?
const coche3=coche2; //de esta forma los dos objetos tienen la misma referencia
if (coche3===coche2){
    console.log("Los coches son iguales");
}else{
    console.log("Los coches no son iguales");

}







