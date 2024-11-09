//FRAGMENT

//https://jsonplaceholder.typicode.com/users

const cargarJsonBtn=document.querySelector('#cargarGET');

cargarJsonBtn.addEventListener('click',()=>{

    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET',
    })


    .then (res=>{
        return res.json()
    })
    .then (datos=>{
        const list=document.querySelector('#contenido')
        const fragment=document.createDocumentFragment()
        for (const listitem of datos){
            const lista=document.createElement('li')
            lista.textContent=`${listitem.name} -${listitem.username}`
            fragment.appendChild(lista);
        }
        list.appendChild(fragment);

    })
})