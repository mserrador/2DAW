//ambito de las variables. Ambito de bloque y de función
"use strict"

/*
El ámbito de bloque se define para variables que se crean
dentro de un bucle o dentro de unas llaves
*/ 

//ambito de bloque y de función con let
function ambito(){
    let a="ambito de funcion";
    if (true){
        let a="ambito de bloque";
        console.log(`el ambito de bloque es: ${a}`);
    }
    console.log(`el ambito de función es: ${a}`);

}

ambito();


//ambito local y global con var
function ambito2(){
    var a="ambito de funcion";
    if (true){
        var a="ambito de bloque";
        console.log(`el ambito de bloque es: ${a}`);
    }
    console.log(`el ambito de función es: ${a}`);

}

ambito2();


console.log("otro ejemplo de alcance con let");
let b=20;

function sumar(){
    let b=10;
    b++;
    console.log(b);
}

sumar();

console.log(b);