//LÍNEAS

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    ctx.lineWidth=6;
    ctx.strokeStyle="black";
    ctx.fillStyle="yellow";

    ctx.beginPath();
    ctx.lineJoin="round"; //bevel, miter    
    ctx.moveTo(50,50);//posición en la que se empieza (x,y)
    ctx.lineTo(120,120); //posición del siguiente punto(x,y)
    ctx.lineTo(10,120); //posición del siguiente punto (x,y)
    ctx.closePath(); //cerrar desde el punto inicial al último
    

    ctx.stroke(); //pinta las líneas
    ctx.fill();//rellenar de color amarillo

    ctx.beginPath();
    ctx.lineCap="round"; //butt, square
    ctx.lineJoin="round"; //bevel, miter
    ctx.moveTo(200,200);
    ctx.lineTo(200,400);
    ctx.lineTo(400,400);
    ctx.stroke(); //pinta las líneas



}