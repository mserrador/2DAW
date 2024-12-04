import { useRef, useState } from "react";

export const Ej291124 = () => {
  const [items, setItems] = useState([]); 
  const inputElement = useRef();
  const checked = useRef();

  const agregar = () => {
    const newItem = inputElement.current.value; 
    if (newItem != "") { 
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), text: newItem }
      ]); 
    }
    inputElement.current.value = ""; 
  };

  const quitar = () => {
    const seleccionado = checked.current.checked;
    items.forEach(item => {
        if () {
            item.value = "";
        }
    });
  };

  return (
    <>
      <input ref={inputElement} type="text" placeholder="Añade un texto" />
      <button onClick={agregar}>+</button>
      <button onClick={quitar}>-</button>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <input ref={checked} type="checkbox" />
            <label>{item.text}</label>
          </div>
        ))}
      </div>
    </>
  );
};