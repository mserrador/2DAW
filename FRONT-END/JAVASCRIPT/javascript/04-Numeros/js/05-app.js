//convertir string a número
//parseInt, toFixed, toString...
//cambio de base

const numero1="20";
const numero2="20.2";
const numero3="uno";
const numero4=20;

console.log(typeof (numero1));
console.log(typeof (numero4));


//convertir de string a number
console.log(parseInt(numero1));
console.log(Number.parseInt(numero1));

//pasar a decimal un número en binario o hexadecimal
console.log(parseInt("111",2)); //pasa a decimal el número binario 111
console.log(parseInt("A",16)); //pasa a decimal el número hexademial "A"

let n1=2.6454;

//toFixed, con un 0 redondea, con un 2 se queda con 2 decimales
//toFixed, devuelve un string, por eso en el siguiente ejemplo se parsea
console.log(parseFloat(n1.toFixed(2)));

//pasar a string
console.log(n1.toString());

//paso de decimal a binario
console.log((9).toString(2));

//paso de decimal a hexadecimal
console.log((255).toString(16));
















