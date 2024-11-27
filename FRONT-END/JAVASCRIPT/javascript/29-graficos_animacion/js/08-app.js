//cargar una imagen en el canvas

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    let miImagen=new Image();
    miImagen.src="img/linux.jpeg";
    //drawImage(imagen,posX,posY);
    miImagen.onload=()=>{
        ctx.drawImage(miImagen,10,10);    
    }
    console.log(miImagen);
}