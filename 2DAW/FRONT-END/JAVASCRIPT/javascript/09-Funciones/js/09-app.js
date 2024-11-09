//Desestructurar los argumentos de una función


//objeto literal
const persona={
    nombre:"pepe",
    edad:15,
}


const mostrar=(persona)=>{
    console.log(`${persona.nombre}`);
}


const mostrar2=(persona)=>{
    const {nombre: no}=persona;
    console.log(`${no}`);
}


const mostrar3=({nombre: no}=perso)=>{
    console.log(`${no}`);
}

mostrar(persona);
mostrar2(persona);
mostrar3(persona);


//objeto literal
const persona1={
    nombre:"pepe",
    edad:15,
    conyuge:{
        nombre:"maria",
        edad: 20,
        oficio:{
            nombre:"informatico",
            ano:4,
        }
    }
}

const mostrar4=(  {conyuge:{edad}}   ) => console.log(`${edad}`);

mostrar4(persona1);

const mostrar5=(  {conyuge:{oficio:{ano}}}   ) => console.log(`${ano}`);

mostrar5(persona1);