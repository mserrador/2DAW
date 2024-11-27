//condición if, operador igual

const valor=1000;

if(valor==1000){ //igual
    console.log("si es igual..")

}else{
    console.log("No es igual")
}

//operador diferente

const valor2=1001;
if(valor2 != 1001){ //diferente
    console.log("si es diferente..")
}else{
    console.log("si es igual")
}

const v1=10;
const v2="10";
console.log(typeof(v1));
console.log(typeof(v2));

if(v1 == v2){ 
    console.log("iguales")
}else{
    console.log("diferentes")
}
//el operador === devuelve true si son iguales los valores y los tipos
//el operador !== devuelve true si son diferentes incluido el tipo
if(v1 === v2){ 
    console.log("iguales")
}else{
    console.log("diferentes")
}