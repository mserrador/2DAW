//indexDB - Es una API que permite almacenar grandes cantidades de datos

//Puede almacenar String, archivos, imágenes...
//tipo de dato soportado por JS
//Permite almacenar más de 50MB
//Lo soportan los principales navegadores

//NUNCA almacenaré password, número de cuenta...


//Crear el almacen de datos

let DB;

document.addEventListener('DOMContentLoaded',()=>{
    clientDB();
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





