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
<<<<<<< HEAD
    ctx.closePath(); //cerrar desde el punto inicial al último
    

    ctx.stroke(); //pinta las líneas
    ctx.fill();//rellenar de color amarillo

=======
    
    ctx.closePath(); //cerrar desde el punto inicial al último
    
    ctx.stroke(); //pinta las líneas
    ctx.fill();//rellenar de color amarillo

>>>>>>> 4a0aee7c5f8e1e9284e2f3877673d2df43adf297
    ctx.beginPath();
    ctx.lineCap="round"; //butt, square
    ctx.lineJoin="round"; //bevel, miter
    ctx.moveTo(200,200);
    ctx.lineTo(200,400);
<<<<<<< HEAD
    ctx.lineTo(400,400);
=======
    ctx.lineTo(300,400);
>>>>>>> 4a0aee7c5f8e1e9284e2f3877673d2df43adf297
    ctx.stroke(); //pinta las líneas



}