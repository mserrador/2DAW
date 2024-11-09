//eventos del ratón


const nav=document.querySelector('.navegacion');

//mouseenter
nav.addEventListener('mouseenter',()=>{
    nav.style.backgroundColor="red";
})


//mouseout
nav.addEventListener('mouseout',()=>{
    nav.style.backgroundColor="transparent";
})

//mousedown
nav.addEventListener('mousedown',()=>{
    console.log("clic del raton");
    nav.style.backgroundColor="transparent";
})


//mouseup
nav.addEventListener('mouseup',()=>{
    console.log("suelto el botón del ratón");
    nav.style.backgroundColor="transparent";
})

//doble clic
nav.addEventListener('dblclick',()=>{
    console.log("Doble clic");
    nav.style.backgroundColor="transparent";
})

