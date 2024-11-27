//axios

//https://axios-http.com/es/docs/intro


axios.get('https://picsum.photos/list')
    .then((respuesta)=>{
        console.log(respuesta);
        console.log(respuesta.status);
        console.log(respuesta.data); //con axios no tengo que hacer respuesta.json()
        mostrarDatos(respuesta.data);                
    })
    .catch((error)=>{
        console.log(error);
    })


function mostrarDatos(datos){
    const list=document.querySelector('#contenido');
    const fragment=document.createDocumentFragment();

    for (const userInfo of datos){
        const listItem=document.createElement('li');
        listItem.textContent=`${userInfo.author} - ${userInfo.post_url}`
        listItem.innerHTML += `<br><a href="${userInfo.post_url}">Ver imagen</a>`
        fragment.appendChild(listItem);
    }
    list.appendChild(fragment);
}




async function obtenerDatos(){
    try{
        const respuesta=await axios('https://picsum.photos/list',{
            method: 'GET',
            /* params: {
                api_key: '32434234432kdfk234324',
                language: 'es-ES',
            },
            headers: {
                accept: 'application/json',
                Authorization: 'fkadjfkdj fj3jsf34ijkd'
            } */
        })
        console.log(respuesta.data);

    }catch(error){
        console.log(error);
    }
}

obtenerDatos();