//circulos
//arc(x,y,r,startangle,endangle,true/false)
//x,y eje del circulo
//r radio 
//startangle, angulo inicial 
//endangel, angulo final
//el último parámetro por defecto es false (sentido en las agujas del rejoj)
//si es true (se dibuja en sentido contrario a las agujas del reloj)

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    ctx.lineWidth=10;
    ctx.lineStyle="red";

    //dibujar un arco
    ctx.beginPath();
    ctx.arc(100,150,50,0.5*Math.PI,1*Math.PI,true);
    ctx.stroke();


}