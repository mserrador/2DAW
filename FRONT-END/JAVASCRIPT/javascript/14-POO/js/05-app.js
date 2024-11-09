//COMPARAR LA HERENCIA CON objetos creados con class y mediante funciones




/***************************************ECMScript 5***********************/
//expresion de una función
function Animal(name,eye,leg){
    this.nombre=name;
    this.numOjos=eye;
    this.numPatas=leg;
    
};

function Gato(){
    this.color="blanco";
    this.colorOjos="negros";
    
}

Gato.prototype= new Animal("siames",2,4);

Gato.prototype.infoNumOjos=function(){
    return this.numOjos;
}

let siames=new Gato();
console.log(`El gato con nombre ${siames.nombre} tiene ${siames.infoNumOjos()} ojos y ${siames.numPatas} patas`);


/***************************************ECMScript 5***********************/
//objeto literal, no es muy común
let gato = {
    ojos: 2,
    piernas: 4,
}

let siames3 = {
    color: "blanco",
    color_ojos: "azul",
	__proto__: gato

}

siames.__proto__.dameOjos = function () {
	  
	    return this.ojos;
}


console.log(siames3);

console.log("color ojos " + siames3.color);
console.log("nº ojos " + siames3.ojos);



/***************************************ECMScript 6***********************/

class Animal2{
    constructor(name,eye,leg){
        this.nombre=name,
        this.numOjos=eye,
        this.numPatas=leg
    }
}


class Gato2 extends Animal2{
    constructor(nom,oj,pata){
        super(nom,oj,pata); //hereda atributos del constructor
        this.color="blanco";
        this.colorOjos="negros";
    }
    infoNumeroOjos(){
        return this.numOjos;
    }
}



let siames2=new Gato2("Gatito",3,6);
console.log(`El gato con nombre ${siames2.nombre} tiene ${siames2.infoNumeroOjos()} ojos y ${siames2.numPatas} patas`);