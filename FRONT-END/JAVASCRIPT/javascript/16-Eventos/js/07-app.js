//detener o prevenir eventos

const card=document.querySelector('.card');
console.log(card);

card.addEventListener('click',(eve)=>{
    if (eve.target.classList.contains('titulo')){
        console.log('click en título')
    }
    if (eve.target.classList.contains('precio')){
        console.log('click en precio')
    }
    if (eve.target.classList.contains('card')){
        console.log('click en card')
    }
})