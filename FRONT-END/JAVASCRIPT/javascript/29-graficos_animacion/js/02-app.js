//dibujar rectangulos

window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    ctx.fillStyle="blue";//color de relleno

    //pinto cuadrado
    //(x,y,width,height)
    ctx.fillRect(50,50,100,100);//crea un cuadrado

    ctx.strokeStyle="black"; //color del borde del cuadrado
    ctx.lineWidth=5; //grosor de la línea

    //pintar el borde del cuadrado
    ctx.strokeRect(150,150,50,50);

    ctx.fillStyle="yellow";
    ctx.fillRect(200,300,40,40);
    ctx.strokeRect(200,300,40,40);

}