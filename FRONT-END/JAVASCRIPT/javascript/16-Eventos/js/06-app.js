//como solucionar el efecto bubbling o propagación de eventos
//stopPropagation

const cardDiv=document.querySelector('.card');
const infoDiv=document.querySelector('.info');
const titulo=document.querySelector('.titulo');

/* 
cardDiv.addEventListener('click',()=>{
    console.log('click en card')
})


infoDiv.addEventListener('click',()=>{
    console.log('click en info')
})

titulo.addEventListener('click',()=>{
    console.log('click en titulo')
})
 */
//¿cómo evitamos el efecto bubbling?
cardDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('click en card')
})


infoDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('click en info')
})

titulo.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('click en titulo')
})

