//Editar y eliminar registro


let DB;

document.addEventListener('DOMContentLoaded',()=>{
    clientDB();

/*     setTimeout(()=>{
        crearCliente(nuevoCliente);
        crearCliente(nuevoCliente2);
    },1000)   */
     
    /* setTimeout(()=>{
        eliminarCliente();
    },1000) 

     setTimeout(()=>{
        mostrarCliente();
    },1000)  */
     
    /* setTimeout(()=>{
        editarCliente();
    },1000)  */

    setTimeout(()=>{
        borrarBD();
    },1000)

})

function clientDB(){
    //abrir BD
    let clienteDB=window.indexedDB.open('bdCliente',1);//(nombre bd,version)

    //si hay error
    clienteDB.onerror=function(){
        console.log("Hubo un error en la BD");
    }

    //si no hay error
    clienteDB.onsuccess=function(){
        console.log("La BD se creo correctamente");
        DB=clienteDB.result; //result es equivalente al target
        console.log(DB);
    }

    //configurar la BD
    //solo se ejecuta una vez
    //si se elimina la BD, se vuelve a ejecutar
    clienteDB.onupgradeneeded=function(e){
        //crear el almacen de datos
        const db=e.target.result;
        const objectStore=db.createObjectStore(['almacenCliente'],{
            keyPath: "id", //el keypath referencia a la BD
            autoIncrement:true //cuando se crea un registro se autoincrementa. Genera claves
        })

        //definir las columnas o campos
        objectStore.createIndex('nombre','nombre',{unique:false});//(campo, keypath o referencia, restricciones de campo)
        objectStore.createIndex('email','email',{unique:false});
        objectStore.createIndex('telefono','telefono',{unique:false});
    }
}

//crear cliente
const nuevoCliente={
    nombre:"pepe",
    email:"pepe@pepe.es",
    telefono:"111",
    //id:Date.now(), //si quiero asignarle un id personalizado
}

const nuevoCliente2={
    nombre:"ana",
    email:"ana@ana.es",
    telefono:"222",
    //id:Date.now(), //si quiero asignarle un id personalizado
}
//inserta cliente en el almacen de datos
function crearCliente(nuevoCliente){
    let transaccion=DB.transaction(['almacenCliente'],'readwrite'); //readwrite, readonly
    

    transaccion.oncomplete=function(){
        console.log("Transacción completada");
    }

    transaccion.onerror=function(){
        console.log("error en la transaccion");
    }

    //habilitar el objectStore
    const objectStore=transaccion.objectStore('almacenCliente');
    objectStore.add(nuevoCliente);
}


function mostrarCliente(){
    const objectStore=DB.transaction('almacenCliente','readonly').objectStore('almacenCliente');

    objectStore.openCursor().onsuccess=function(e){
        const cursor=e.target.result; //utilizamos un cursor para recorrer el almacen
        if (cursor){
            const {telefono,nombre,email,id}=cursor.value;
            console.log(telefono);
            console.log(nombre);
            console.log(email);
            console.log(id);
            cursor.continue(); //pasa al siguiente registro
        }
    }

    
}

function editarCliente(){
    let transaccion=DB.transaction(['almacenCliente'],'readwrite');
    
    const objectStore=transaccion.objectStore('almacenCliente');

    const idCliente=1;
    //

    objectStore.openCursor().onsuccess=function(e){
        const cursor=e.target.result; //utilizamos un cursor para recorrer el almacen
        if (cursor){
            if (cursor.value.id===idCliente){
                console.log("existe");
                console.log(cursor.value);

            }
    
            cursor.continue(); //pasa al siguiente registro
        }
    }

    //crear un nuevo objeto con los datos a modificar del idCliente 1
    const actualizarCliente={
        nombre:"antonio",
        email:"antonio@antonio.es",
        telefono:"333",
        id:1
     
    }

    objectStore.put(actualizarCliente); //INSERTA
    transaccion.oncomplete=()=>{
        console.log("EDITAR. TRANSACCIÓN COMPLETADA")
    }

    transaccion.onerror=()=>{
        console.log("ERROR. TRANSACCIÓN NO COMPLETADA")
    } 

}

function eliminarCliente(){
    let transaccion=DB.transaction(['almacenCliente'],'readwrite');
    
    const objectStore=transaccion.objectStore('almacenCliente');

    objectStore.delete(1); //BORRAR

    transaccion.oncomplete=()=>{
        console.log("Eliminando...")
    }

    transaccion.onerror=()=>{
        console.log("ERROR. EN LA BORRADO")
    }   

  
}

function borrarBD(){
    DB.close(); //cierra la conexión sin dejar ninguna transacción
    
    let dbDelete=window.indexedDB.deleteDatabase('bdCliente',1);//(nombre bd,version)   

    dbDelete.onerror=(e)=>{
        console.log("error borrando la BD")
    }

    dbDelete.onsuccess=(e)=>{
        console.log("BD eliminada");
        console.log(e.result);//undefined
    }
}