document.addEventListener("DOMContentLoaded",function(){
    const email=document.querySelector('#email');
    const btnSubmit=document.querySelector('#formulario input[type="submit"]');
    const formu=document.querySelector('#formulario')

    email.addEventListener('input',enviarEmail);
    //email.addEventListener('blur',enviarEmail);
    formu.addEventListener('submit',validarFormulario);

    btnSubmit.disabled=true;
    function enviarEmail(e){
        if (e.target.value==''){
            //console.log("campo vacio");
            limpiarMensaje(e.target.parentElement);
            mostrarMensaje(e.target.parentElement,`el campo ${e.target.id} es obligatorio`)
            
        }
        else{
            //validar email
            if (!validarEmail(e.target.value)){
                mostrarMensaje(e.target.parentElement,`el campo ${e.target.id} no es valido`)    
                return;
            }
            //console.log(e.target.parentElement)
            limpiarMensaje(e.target.parentElement);
        }
    }

    function limpiarMensaje(referencia){
        const alerta=referencia.querySelector('.bg-red-600')
        if (alerta){
            alerta.remove();
        }
        btnSubmit.disabled=false;
    }

    function mostrarMensaje(referencia,texto){
        limpiarMensaje(referencia);

        const mensajeError=document.createElement('p');
        mensajeError.textContent=texto;
        mensajeError.classList.add('bg-red-600','text-white')
        referencia.appendChild(mensajeError);
        btnSubmit.disabled=true;

    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado=regex.test(email);     
        return resultado;
    }

    function validarFormulario(e){
        e.preventDefault();

        setTimeout(()=>{
            const mensaje=document.createElement('p');
            mensaje.textContent="Mensaje Enviado";
            mensaje.classList.add('bg-green-600');
            formu.appendChild(mensaje);
            formu.reset(); 
            btnSubmit.disabled=true;
            email.setAttribute('disabled',true);

            setTimeout(()=>{
                mensaje.remove();
                email.removeAttribute('disabled');
            },2000)


        },2000)
    }
    


})