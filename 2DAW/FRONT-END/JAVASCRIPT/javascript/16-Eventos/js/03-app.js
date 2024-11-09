//eventos de teclado

const buscador=document.querySelector('.busqueda');

/* //keyup
buscador.addEventListener('keyup',()=>{
    console.log('tecla arriba');
})

//keydown
buscador.addEventListener('keydown',()=>{
    console.log('tecla abajo');
})

//perder el foco, blur
buscador.addEventListener('blur',()=>{
    console.log('perdiendo el blur');
})

//paste
buscador.addEventListener('paste',()=>{
    console.log('pegar');
})

//copy
buscador.addEventListener('copy',()=>{
    console.log('copiar');
})

//cut
buscador.addEventListener('cut',()=>{
    console.log('cortar');
}) */


//input se ejecuta en casi todos los eventos anteriores salvo el blur

buscador.addEventListener('input',(e)=>{
    console.log(e.type); //tipo
    console.log(e.target); //sobre quien se lleva a cabo el evento
    console.log(e.target.value); //valor
    if (e.target.value==''){
        console.log("el campo esta vacio");
    }

})