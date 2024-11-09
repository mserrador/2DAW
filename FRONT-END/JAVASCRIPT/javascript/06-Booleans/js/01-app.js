//boolean

const valor1=true;
const valor2=false;
const valor3="true";

console.log(valor1);
console.log(valor2);

console.log(typeof valor1);
console.log(typeof valor2);


const valor4=new Boolean(true);
console.log(valor4);

console.log(typeof valor4);


//operador ternario
const pasar=true;

if (pasar){
    console.log("si pasa");
}else{
    console.log("no pasa");
}

console.log(pasar ? "si pasa" : "no pasa");