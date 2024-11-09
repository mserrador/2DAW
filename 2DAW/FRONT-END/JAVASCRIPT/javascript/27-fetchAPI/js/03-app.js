//obtener informacion del empleados.json

const cargarJsonBtn=document.querySelector('#cargarJSONArray');

cargarJsonBtn.addEventListener('click',obtenerDatos);


function obtenerDatos(){
    const url="data/empleados2.json";

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
            mostrarDatos(datos);
        })
        .catch(error=>{
            console.log(error);
        })  
}



function mostrarDatos(empleados){
    const contenido=document.querySelector('#contenido');

    empleados.forEach(empleado => {
        const {id,nombre,empresa,trabajo}=empleado;
        
        contenido.innerHTML +=`
        <div id='${id}'>
            <p> id: ${id}</p>
            <p> nombre: ${nombre}</p>   
            <p> empresa: ${empresa}</p>
            <p> trabajo: ${trabajo}</p>
            <button class="boton">Enviar</button>
        </div>
        `    
    });
    const botones=document.querySelectorAll('.boton');
    botones.forEach((btn,indice)=>{
        btn.addEventListener("click",()=>{
            alert (`Has hecho clic en ${indice}`)
        })
    })
    console.log(contenido);

}

