//añdir registros al almacen de datos


let DB;

document.addEventListener('DOMContentLoaded',()=>{
    clientDB();

    setTimeout(()=>{
        crearCliente(nuevoCliente);
        crearCliente(nuevoCliente2);
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