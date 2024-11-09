function obtenerDatos(){
    const url="data/Coches.json";

    //fetch ya tiene el resolve y el reject implicito. No hay que difinir la promesa
    //
    fetch(url)
        .then (respuesta=>{
/*             console.log(respuesta);
            console.log(respuesta.ok);
            console.log(respuesta.status); */
            return respuesta.json();
        })
         .then (datos=>{
            //console.log(datos);
            mostrarDatos(datos);
        })
        .catch(error=>{
            console.log(error);
        })  
}


function mostrarDatos(datos){
    const contenido=document.querySelector('#contenido');
    
    let html='';
    datos.forEach((coche,indice) => {
        const {marca, modelo,matricula,color,npuertas,imagen}=coche;

        html +=`
        <p> Marca: ${marca}</p>
        <p> Matricula: ${matricula}</p>
        <p> Modelo: ${modelo}</p>
        <p> Color: ${color}</p>
        <p> Número de puertas: ${npuertas}</p>
        <img id="img${indice}" class="visible" src="${imagen}" />

        `;

        
    });
    contenido.innerHTML=html;
    
}

obtenerDatos();


setTimeout(()=>{
    const imagen3=document.querySelector('#img3');
    const imagen4=document.querySelector('#img4');
    console.log(imagen3);
    console.log(imagen4);

    /* const cargarImagen=()=>{
        console.log("ejecuta");
    } */

    const cargarImagen=(entradas)=>{
        console.log(entradas);
        entradas.forEach((entradas)=>{
            if (entradas.isIntersecting){
                //console.log("la imagen está en la pantalla")
                entradas.target.classList.add('visible');
            }else{
                entradas.target.classList.remove('visible');
                //console.log("la imagen NO está en la pantalla")
            }
        })

    }
    
    //crear la instancia de un observador
    const observador=new IntersectionObserver(cargarImagen,{
        root:null, //ventana gráfica del navegador o elemento raiz
        rootMargin: '0px 0px 0px 0px', //margenes del obserador o pantall (elemento raiz) que se ejecute el código
        threshold: 1.0 //valores 0 y 1 significa que se ejecutará cuando esté todo la imagen dentro de la pantalla o elemento raiz
    })
    
    //¿que imagen o imágenes vamos a revisar?
    observador.observe(imagen3);
    observador.observe(imagen4);

},100)

//obtener la referencia de las imágenes que voy a observar
//para que cuando haga scroll en su zona se ejecute el código que yo quiera
