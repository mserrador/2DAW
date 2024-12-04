import { useState } from "react"


export const Ej271124 = () => {
    const [text, setText]=useState({
        texto1:"",
        texto2:""
    });
    
    const cambio = (e) => {
        setText({
            ...text,
            texto1: e.target.value
        });      
    };
    
    
    const cambio2 = (e) => {
        setText({
            ...text,
            texto2: e.target.value
        });
    };

  return (
    <>
        <input onInput={cambio} type="text" value={text.texto1}></input>
        <br></br>
        <input onInput={cambio2} type="text" value={text.texto2}></input>
        <p>campo1: {text.texto1}</p>
        <p>campo2: {text.texto2}</p>
    </>
  )
}
