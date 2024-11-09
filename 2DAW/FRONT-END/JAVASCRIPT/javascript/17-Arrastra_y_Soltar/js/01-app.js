//drag & drop
//arrastrar y soltar

const caja=document.querySelector('#caja');

caja.setAttribute('draggable','true');

//evento dragstart
caja.addEventListener('dragstart',e=>{
    //console.log(e);
    console.log("comienzo el arrastre");
})

//evento dragend
caja.addEventListener('dragend',e=>{
    //console.log(e);
    console.log("Termino de arrastrar");
})

//evento drag
caja.addEventListener('drag',e=>{
    //console.log(e);
    console.log("estoy arrastrando");
})

const contenedor=document.querySelector('#contenedor');
//dragenter: evento que se ejecuta cuando
//otro elemento se arrastra encima del contendor
contenedor.addEventListener('dragenter',e=>{
    //console.log(e);
    console.log("dragenter");
})

//dragleave, se ejecuta cuando se abandona
//el contenedor
contenedor.addEventListener('dragleave',e=>{
    //console.log(e);
    console.log("dragleave");
})

//dragover, se ejecuta cuando se arrastra
//sobre el contenedor sin soltar el objeto
contenedor.addEventListener('dragover',e=>{
    //console.log(e);
    e.preventDefault();    
    console.log("dragover");
})

//drop
//el comportamiento por defecto de dragover
//hay que anularlo con preventDefault para  que
//funcione el drop
contenedor.addEventListener('drop',e=>{
    //console.log(e);
    console.log("drop");
    contenedor.appendChild(caja);
})