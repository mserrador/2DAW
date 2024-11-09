/*
fetch API
    fetch(url,{
        method: 'POST', 'GET', 'PUT', 'DELETE'
        body: Datos que enviamos. Si es un objeto hay que convertilo JSON.stringify(dato)
        headers:{
            cabeceras de informacijón swobre lo que estamos enviando
            No es lo mismo enviar una foto que enviar un formulario, etc...
        }
    })

*/

const cargarJsonBtn=document.querySelector('#cargarGET');

cargarJsonBtn.addEventListener('click',obtenerDatos);


function obtenerDatos(){
    const url="https://picsum.photos/list";

    //fetch ya tiene el resolve y el reject implicito. No hay que difinir la promesa
    //
    fetch(url)
        .then (respuesta=>{
            console.log(respuesta);
            console.log(respuesta.ok);
            console.log(respuesta.status);
            return respuesta.json();
        })
         .then (datos=>{
            console.log(datos);
            //mostrarDatos(datos);
        })
        .catch(error=>{
            console.log(error);
        })  
}
