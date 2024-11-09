//evento scroll
//getBoundingClientRect, devuelve información de la 
//posicion del elemento (top, bottom, left, rigt)

/* window.addEventListener('scroll',()=>{
    //console.log('scrolling');
    const posicion=window.scrollY;
    console.log(posicion);
}) */



window.addEventListener('scroll',()=>{
    const premium=document.querySelector('.premium');
    //devuelve información del elemento
    //y la posición relativa del elemento
    //en nuestra el card premium
    const posicion=premium.getBoundingClientRect();
    console.log(posicion);
    if (posicion.top< 520){
        console.log("El elemento ya se ve")
    }else{
        console.log("El elemento NO se ve")
    }
})

