//vectores, push y pop, toString, shift y unshift

//push añade al final
//pop saca al final

//shift saca el primero
//unshift añade el primero

//toString, convierte array a string

//crear un vector
const numeros=[1,2,3,4];

//otra forma de crear un vector
const numeros2=new Array(100);

//console.log(numeros2);
numeros2.push(2);
console.log(numeros2);

//crear un vector o array que contiene de todo: string, numero, boolean, objetos...
const arre=["hola",10,true,{nombre:"pepe",apellido:"garcia"}];
console.log(arre);

//array vacio
const arr1=[];

console.log(arr1); //muestra la información de forma dinámica
arr1.push(1);
console.table(arr1); //muestra la información de forma estática

arr1.push(1);
arr1.push(2);
arr1.push(3);
console.log(arr1);
console.table(arr1);

//convertir un array en un string
let arr2=['perro','gato'];
let arr2String=arr2.toString();

console.log(arr2);
console.log(arr2String);

//crear un vector dentro de otro
const vector1=[[1,2,3],[4,5,6],[7,8,9]];
console.log(vector1);
console.log(vector1[2][2]);
console.log(vector1[1][0]);

const meses=['enero','febreo','marzo'];

for (let i=0;i<meses.length;i++){
    console.log(meses[i]);
}

meses.push('abril');
meses.unshift('felicidad');
meses.pop();
meses.shift();
console.log(meses);





