import './App.css'
import { Valores } from './components/ValoresT.jsx'
import { FotoFrase } from './components/FotoFrase.jsx'
import { Header } from './components/HeaderP.jsx'
import { Portada } from './components/Portada.jsx'
import { Razones } from './components/Razones.jsx'
import { Servicios } from './components/Services.jsx'
import { SobreMi } from './components/SobreMi.jsx'
import { Inicia } from './components/Inicia.jsx'


function App() {
 
  return (
    <>
    
      <Header/> 
      <Portada/>
      <Servicios/>
      <SobreMi/>
      <FotoFrase/>
      <Razones/>
      <Valores/>
      <Inicia/>
    </>
    
    
      
    
  )
}

export default App
