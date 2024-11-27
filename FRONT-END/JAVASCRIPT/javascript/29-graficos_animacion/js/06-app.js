//curva Bezier
//bezierCurveTo(xControl,yControl,xControl2,yControl2,x,y)

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    ctx.lineWidth=5;
    ctx.strokeStyle="orange";

    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.bezierCurveTo(150,450,20,200,300,20);

    ctx.stroke();
}
