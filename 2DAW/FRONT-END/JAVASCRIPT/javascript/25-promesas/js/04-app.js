/* const usuarios=[
    {
        id:1,
        nombre:"pepe",
        telefono:111
    },
    {
        id:2,
        nombre:"maria",  
        telefono:222
    },
    {
        id:3,
        nombre:"juan",
        telefono:333
    }
]  */
 
const usuarios=[];

const mostrarUsuarios=()=>{
    return new Promise((exito,fracaso)=>{
        if (usuarios.length==0){
            fracaso("no hay usuarios");
        
        }else{
            setTimeout(()=>{
                exito(usuarios);
            },2000)
            
        }
    })
}

/* mostrarUsuarios()
    .then(usuarios=>{console.log(usuarios)})
    .catch(err=>{console.log(err)}) */


//otra forma de crear una promesa
//async devuelve una promesa
//await

async function funcionAsincrona(){
    try{
        const user=await mostrarUsuarios();
        console.log(user)
    }catch(err){
        console.log(err);
    }
}

funcionAsincrona();