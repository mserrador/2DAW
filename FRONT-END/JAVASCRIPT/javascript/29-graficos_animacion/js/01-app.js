//comprobar que el navegador soporta canvas

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');

    if (canvas){
        console.log('El navegador soporta CANVAS')
    }else{
        console.log('El navegador NO soporta CANVAS')
    }
}