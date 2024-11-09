//función y expresión función

//Llamar a una función con parentesis hacemos que se ejecute inmediatamente
//y sin los parentesis se pasa una referencia a la función que se ejecutará

//declarar una función
sumar();//NO GENERA ERROR
function sumar(){
    console.log(2 + 2);
}

sumar(); //ejecuto la función

console.log(sumar); //muestra la función, el código

//sumar2();//GENERA UN ERROR, pq llamo a una variable
//antes de estar definida
//expresión de una función
const sumar2=function(){
    console.log(3 + 3);
}

sumar2();











