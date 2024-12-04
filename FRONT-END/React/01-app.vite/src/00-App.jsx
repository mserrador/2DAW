// rafc + tabular
import React, { Fragment } from 'react'

// Un componente es codigo encapsulado, reutilizable que puede tener o no un estado
// El estadoo es como se encuentra la infomracion del componente en un momento determinado
//Ejemplo: la primera vez que se carga el formulario tiene un estado inicial
// Cuando se van retiradno los campos tiene otro estado y asi sucesivamente...

// Functional component = componentes basados en funciones
// En react no se usan las clases, se usan componentes basado en funciones
// Los componentes no suelen estar en el main.

// Los componentes siempre se nombraran utilizando el formato PascalCase
// Para poder utilizar el componente desde otro sitio es necesario exportar

export const App = () => {
  return (
    <>
    <h1>Ave, Caesar, morituri te salutant</h1>
    <h1>Veni, vidi, vici</h1>
    
    </>
  )
}

// forma de retornar algo, mejor que usanr fragment

export const App1 = () => {
  return (
    <Fragment>
    <h2>victoria o éxito conseguido con facilidad y rapidez.</h2>
    <h2>Salve, César, los que van a morir te saludan</h2>
    </Fragment>
  )
}


// Genera un error porque no se puede devolver dos lineas
// Para soucionarlo utilizaremos Fragment o las etiquetas <> </>
// Nunca utilizaremos una etiqueta <di> para englobar el return

/*export default function AppError() {
  return (
    <div>00-App</div>
  )
}
*/
