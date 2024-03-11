import './App.css'
import { FotoFrase } from './components/FotoFrase.jsx'
import { Header } from './components/HeaderP.jsx'
import { Portada } from './components/Portada.jsx'
import { Servicios } from './components/Services.jsx'
import { SobreMi } from './components/SobreMi.jsx'


function App() {
 
  return (
    <>
    
      <Header/> 
      <Portada/>
      <Servicios/>
      <SobreMi/>
      <FotoFrase/>
    </>
    
    
      
    
  )
}

export default App
