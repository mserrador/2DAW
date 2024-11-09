//dataTransfer.setData
//Permite identificar el elemento que estoy arrastrando

const caja=document.querySelector('#caja');
const contenedor=document.querySelector('#contenedor');

caja.setAttribute('draggable','true');

//evento dragstart
caja.addEventListener('dragstart',e=>{
    console.log(e);
    e.dataTransfer.setData("informacion",e.target.id)
    console.log("comienzo el arrastre");
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
    let data=e.dataTransfer.getData("informacion");
    if (data==="caja"){
        
        //childElementCount, devuelve el número de hijos del
        //contenedor
        if (contenedor.childElementCount===0){
            contenedor.appendChild(caja);  
        }
        //contenedor.appendChild(caja);    
    }
    //contenedor.appendChild(caja);
})