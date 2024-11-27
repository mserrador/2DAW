window.onload=()=>{
    let canvas=document.querySelector('#miCanvas');
    let ctx=canvas.getContext('2d'); //trabajar en 2d

    let imagen=new Image();
    imagen.src="img/ave.png";

    imagen.onload=()=>{

        let columnas=5;
        let filas=3;

        let frameWidth=imagen.width/columnas;
        let frameHeight=imagen.height/filas;
        console.log(frameWidth);
        console.log(frameHeight);


        let frameActual=0;

        setInterval(()=>{
            frameActual++;
            let maxFrame=columnas*filas -1;//numero máximo de frames
            if (frameActual >= maxFrame){
                frameActual=0;
            }

            let column=frameActual % columnas; //calcula la columna
            let row=Math.floor(frameActual/columnas); //calculo la fila

            ctx.clearRect(0,0,canvas.width,canvas.height);

            ctx.drawImage(
                imagen,
                //coordenada x donde se empieza a recortar
                column * frameWidth,
                //coordenada y donde se empieza a recortar
                row * frameHeight,
                //ancho del frame o imagen recortada
                frameWidth,
                //alto del frame o imagen recortada
                frameHeight,
                //posición X
                40,
                //posición Y
                30,
                //si quiero escalar la imagen
                frameWidth,
                //si quiero escalar la imagen
                frameHeight,
            );
        },100)
    }

}