// PropTypes o tipo de properties/props

import PropTypes from "prop-types"

// yanr add prop-types

// Los propTypes permiten chequear en tiempo de ejecucion el tipo de dato que se le pasa
// a los funcional component


export const App4 = ({cadena,numero}) => {
  return (
    <>
        <h1>{cadena}</h1>
        <h2>{numero}</h2>
    </>
    
  )
}

App4.propTypes={
    cadena: PropTypes.string,
    numero: PropTypes.number.isRequired
}