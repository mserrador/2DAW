//texto

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    ctx.font="60px arial";
    ctx.lineWidth=2.0;
    ctx.fillStyle="blue";
    ctx.strokeStyle="yellow";

    //sombras
    ctx.shadowColor="black";
    ctx.shadowOffsetX=5;
    ctx.shadowOffsetY=5;
    ctx.shadowBlur=10;

    //dibuja el texto relleno
    //fillText(texto,coordenada x, coordenada y, número pixel)
    ctx.fillText("hola",100,80);

    //dibuja el texto sin rellenar
    ctx.strokeText("hola",100,80);
}
