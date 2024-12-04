//repetir un patron como imagen
//createPattern(imagen,repeticion) - repeticion puede ser: repeat, repeat-x, repeat-y, no-repeat

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    let imagen=new Image();
    imagen.src="img/linux.jpeg";
    imagen.onload=()=>{
        let patron=ctx.createPattern(imagen,"repeat");
        ctx.fillStyle=patron;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }

   

}