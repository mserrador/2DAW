//crear una función que simula la descarga de clientes

function descargarClientes(){
    return new Promise((exito,fracaso)=>{
        const error=false;
        setTimeout(()=>{
            if(!error){
                exito('Se ha descargdo correctamente los clientes')
            }else{
                fracaso('error desdarga clientes')
            }
        },3000)
    })
}



const ejecutar=async()=>{
    try{
        const respuesta=await descargarClientes();
        console.log(respuesta);
    }
    catch(error){
        console.log(error);
    }

}


ejecutar();


