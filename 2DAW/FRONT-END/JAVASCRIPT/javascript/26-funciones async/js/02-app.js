//crear una función que simula la descarga de clientes

//métodos de las promesas

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

function descargarClientes(){
    return new Promise((exito,fracaso)=>{
        const error=true;
        setTimeout(()=>{
            if(!error){
                exito('Se ha descargdo correctamente los clientes')
            }else{
                fracaso('error desdarga clientes')
            }
        },3000)
    })
}

function descargarPedidos(){
    return new Promise((exito,fracaso)=>{
        const error=true;
        setTimeout(()=>{
            if(!error){
                exito('Se ha descargdo correctamente los pedidos')
            }else{
                fracaso('error desdarga pedidos')
            }
        },3000)
    })
}


//simular los errores de forma anidada

/* const ejecutar=async()=>{
    try{
        const respuesta=await descargarClientes();
        console.log(respuesta);
        const respuesta2=await descargarPedidos();
        console.log(respuesta2);

    }
    catch(error){
        console.log(error);
    }
} */

//Promise.all, o se devuelven con exito las dos promesas
//o no se devuelve ninguna
    const ejecutar=async()=>{
        try{

            const respuesta=await Promise.all([descargarClientes(),descargarPedidos()]);
            //console.log(respuesta);
            console.log(respuesta[0]);
            console.log(respuesta[1]);
                 
    
        }
        catch(error){
            console.log(error);
        }
    }    
ejecutar();
