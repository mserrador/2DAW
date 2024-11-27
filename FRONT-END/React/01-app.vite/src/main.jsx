//imr + tabular
import React from 'react'

//imp + tabular -- > importar los componentes
//import second from 'first'

//React DOM se encargar de renderizar los componentes de react para el navegador
//React Native hace lo mismo peor para dispositivos moviles
import ReactDOM from 'react-dom/client';
import {App,App1} from './00-App.jsx'
import { App2 } from './01-App.jsx';
import './App.css'; // importar hojas de estilo
import { App3 } from './03-App.jsx';
import {Padre} from './Padre.jsx';
import { App4 } from './04-App.jsx';
import { App5 } from './05-App.jsx';
import { App6 } from './06-App.jsx';
import { GuardarEstado2 } from './07-App.jsx';
import { Ej271124 } from './ej27-11-24.jsx';


// Renderiza el o los componentes
ReactDOM.createRoot(document.getElementById('root')).render(
  // se aconseja trabajar en modo estricto, porque nos va a permitir detectar 
  // errores comunes en la etapa de desarrollo
  <React.StrictMode>
    <Ej271124/>
  </React.StrictMode>,
)
