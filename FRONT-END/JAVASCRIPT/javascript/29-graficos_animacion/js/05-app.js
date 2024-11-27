//curva bezier cuadrática
//quadraticCurveTo(controlX,controlY,x,y)

//Requiere dos puntos, el primero es un punto de control 
//y el segundo es el punto final

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    ctx.lineWidth=5;
    ctx.strokeStyle="orange";
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.quadraticCurveTo(150,450,100,20);

    ctx.stroke();
}



