//gradiente radial
//createRadialGradient(x,y,r,x1,y1,r1)
//x,y posicion inical
//x1,y1 posicion final
//r, r1 radio

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    
    let gradiente=ctx.createRadialGradient(canvas.width/2,canvas.height/2,100,canvas.width/2,canvas.height/2,300); 

    //colores del gradiente
    gradiente.addColorStop(0,"green");
    gradiente.addColorStop(0.15,"red");
    gradiente.addColorStop(0.40,"blue");

    //ctx.fillStyle=gradiente;
    //ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,200,0,2*Math.PI);
    ctx.fillStyle=gradiente;
    ctx.fill();
    ctx.stroke();
   

}