
export const Hijo = ({hijoAdoptivo}) => {
    function pedirValor() {
        const ref=document.querySelector('#parrafo');
        ref.textContent=hijoAdoptivo(3,3)
    }
  return (
    <>
        <p id="parrafo"></p>
        <button onClick={pedirValor}>BOTON</button>
    </>
  )
}
