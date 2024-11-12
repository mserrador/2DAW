// 7) Realiza un script que obtenga una lista de palabras tecleadas por el usuario y los almacene en un
// array de forma desordenada a como lo introdujo el usuario. Cuando el usuario introduzca la cadena
// vacía ya no se permitirá introducir más palabras. (utiliza el operador spread). La información que se
// debe mostrar es:
// a) Muestra el contenido del array
// b) La primera palabra del array que no puede coincidir con la primera introducida por el usuario
// c) La última palabra del array que no puede coincidir con la última introducida por el usuario
// d) La palabra de mayor longitud introducida por el usuario.
// e) La media aritmética de las longitudes de las diferentes palabras redondeada al entero mayor.


let listaPalabras = [prompt(`Introduce una palabra`),prompt(`Introduce una palabra`),prompt(`Introduce una palabra`)];

let listaAlterada = [...listaPalabras];
listaAlterada = listaAlterada.reverse();

console.log('-----contenido del array-------');
listaAlterada.forEach(element => {
    console.log(element);
});

console.log('----------palabra de mayor longitud--------');
let mayor = '';
listaAlterada.forEach(element=> {
    if (element.length > mayor.length) {
        mayor = element;
    };
});
console.log(mayor);

console.log('---------------media aritmetica redondeada al entero mayor----------');
let total = 0;
listaAlterada.forEach( element => {
    total = total + element.length;
});
console.log(Math.ceil(total/listaAlterada.length));



