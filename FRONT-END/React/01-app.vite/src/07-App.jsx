// una caja de texto, conforme voy escribiendo valores y refresque la pagina, se mantenga la informacion
// usanado el use state, crear un componente, 

import { useState } from "react"

// en la pagina aparece una box de texto, la idea es inplementando un componente, lo que escribo en la cja se debe ver en la consola, cuando refresque, se debe seguir viendo el tecto en la cjaa y en la consola
// luego hago un custom hook 



/* export const GuardarEstado = () => {
    let textoInicial = localStorage.getItem("texto") || "";
    const [texto,setTexto] = useState(textoInicial);
    
    const cambio = (e) => {
        setTexto(e.target.value)
        localStorage.setItem("texto",texto)
        console.log(texto)
    }

  return (
    <>
        <input onInput={cambio} type="text" value={texto}></input>    
    
    </>
  )
} */

/*   export const GuardarEstado = () => {
    
    const [texto,setTexto] = useState(
        localStorage.getItem('text')
    )
    const setLocalStorage=value=>{
        setTexto(value)
        localStorage.setItem("text",value)
    }
    

  return (
    <>
        <input 
        // onInput={(e) => setTexto(e.target.value)} 
        onChange={(e) => setLocalStorage(e.target.value)}
        type="text" 
        value={texto}>
        </input>    
    
    </>
  )
} */


// hacemos el custom hook que almacena en el local storage el valor introducido por el input

export const useLocalStorage = (key,valorInicial) => {
  const [estadoLocal, setEstadoLocal] = useState(()=>{
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : valorInicial
  });

  const setValue=valor=>{
    setEstadoLocal(valor);
    localStorage.setItem(key,JSON.stringify(valor));
  }

  return [estadoLocal,setValue];
}



export const GuardarEstado2 = () => {
  const [text, setText] = useLocalStorage('text','');
  const [times, setTimes] = useLocalStorage('time',0);


  return (
    <>
    
    <input 
        // onInput={(e) => setText(e.target.value)} 
        onChange={(e) => setText(e.target.value)}
        type="text" 
        value={text}>
    </input>   
    <button onClick={()=>setTimes(times + 1)}>Clic</button>
    <span>{times}</span>
    
    </>
  )
}

