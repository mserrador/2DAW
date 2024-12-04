//gradiente
//createLinearGradient(x,y,x1,y1)
//x,y posicion inicial
//x1,y1 posicion final

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    //gradiente linear
    //createLinearGradient(x,y,x1,y1)
    //x,y posicion inicial
    //x1,y1 posicion final

    //let gradiente=ctx.createLinearGradient(0,0,0,canvas.height); //canvas horizontal
    let gradiente=ctx.createLinearGradient(0,0,canvas.width,0); //canvas horizontal

    //colores del gradiente
    gradiente.addColorStop(0,"green");
    gradiente.addColorStop(0.15,"red");
    gradiente.addColorStop(0.40,"blue");

    ctx.fillStyle=gradiente;
    ctx.fillRect(0,0,500,500);
   

}