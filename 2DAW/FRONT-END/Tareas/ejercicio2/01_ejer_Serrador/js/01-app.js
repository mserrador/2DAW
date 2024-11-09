"use strict"

// 1. Crea un array vacío que contendrá camisetas de diferentes marcas.
let carrito = []

// 2. Añade los siguientes objetos al carrito utilizando el operador spread
const objeto1 = {
    Id:1,
    marca: "kelme",
    genero: "hombre",
    precio: 10,
    talla: "L"
}
const objeto2 = {
    Id:2,
    marca: "joma",
    genero: "hombre",
    precio: 15,
    talla: "L"

}
const objeto3 = {
    Id:3,
    marca: "joma",
    genero: "mujer",
    precio: 12,
    talla: "L"

}
const objeto4 = {
    Id:4,
    marca: "kelme",
    genero: "hombre",
    precio: 19,
    talla: "L"

}
const objeto5 = {
    Id:5,
    marca: "joma",
    genero: "hombre",
    precio: 22,
    talla: "S"

}
const objeto6 = {
    Id:6,
    marca: "kelme",
    genero: "mujer",
    precio: 13,
    talla: "S"
} 

carrito=[...carrito,objeto1,objeto2,objeto3,objeto4,objeto5,objeto6];

//3. Muestra el contenido del carrito 
console.log(carrito);

// 4. Utilizando el método splice añade al array de camisetas el siguiente objeto en la posición 4
const objeto7 = {
    Id:7,
    marca: "kelme",
    genero: "mujer",
    precio: 20,
    talla: "XL"

};

carrito.splice(4,0,objeto7);

// 5. Muestra el contenido del carrito
console.log(carrito);

// 6. Modifica el precio del objeto 3 a 28€
carrito[2].precio=28;

// 7. Ordena el carrito por precio y por talla para mostrarlo por pantalla.

carrito.sort((a, b) => {
    if (a.precio === b.precio) {
        return a.talla.localeCompare(b.talla);
    }
    return a.precio - b.precio;
});

// 8. Incrementa el precio de las camisetas con talla L un 10% (independientemente de la marca
// que sea)

carrito.forEach((prenda) => {
    if (prenda.talla == 'L') {
        let precio = prenda.precio;
        let incremento = (precio*10)/100;
        prenda.precio += incremento;
    }
    
});
console.log(carrito);

// 9. Pide por pantalla la marca, genero y talla de una camiseta para que devuelva el precio en
// caso de que exista.

let marca = prompt("Introduce la marca: ");
let genero = prompt("Introduce el genero: ");
let talla = prompt("Introduce la talla: ");
carrito.forEach((camiseta) => {


    if (camiseta.marca == marca && camiseta.genero == genero && camiseta.talla == talla) {
        console.log(`El precio de la camiseta es: ${camiseta.precio}`)
    }

});

