//metodo this

let nombre="pepe";
let edad=20;

//objeto literal
const persona={
    nombre:"juan",
    edad:25,
    mostrarInfo: function(){
        //la linea comentada más abajo genera error o devuelve una valor no esperado
        //si no hay una variable con nombre y edad.
        //Para solucionarlo utilizamos this
        //de esta forma se hace referencia a nombre y edad el objeto literal
        //console.log(`La persona ${nombre} tiene una edad de ${edad}`)
        console.log(`La persona ${this.nombre} tiene una edad de ${this.edad}`)
    }
}

console.log(persona);
persona.mostrarInfo();






