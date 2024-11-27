//promise, permite realizar de forma asíncrona una tarea, de 
//manera que pueda detectarse si tuvo éxito o fracaso

//situaciones en las que nos podemos encontrar una promesa:
//resolved o fullfilled - la promesa se cumplio
//rejected - la promesa no se cumplio
//pending - la promesa esta pendiente

//Para crear una promesa se debe crear un objeto Promise
//asociarle un callback con las funciones (exito,fracaso)
//y dentro de el indicarle como actuar en cada caso


let promesa1=()=>{
    return new Promise((exito,fracaso)=>{
        let cadena1="La casa blanca";
        let cadena2="casa";
        if (cadena1.includes(cadena2)){
            exito(`${cadena1} incluye a ${cadena2}`)
        }else{
            fracaso(`${cadena1} NO incluye a ${cadena2}`)
        }
    })
}

//como obtengo lo que me devuelve la promesa
promesa1()
    .then(resultado=>{
        console.log(resultado);
    })
    .catch(error =>{
        console.log(error);
    })

