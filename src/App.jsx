import './App.css'
import {Inicio} from './components/inicio/Inicio'
import {SobreDerlis} from './components/sobreMi/SobreDerlis'
import { Servicios } from './components/servicios/Servicios'
import { Contactame } from './components/contacto/Contactame'
import { Routes, Route , Navigate } from 'react-router-dom'
import {Header} from './components/inicio/HeaderP'

function App() {
 
  return (
  <>
    <Header />
    <Routes>
      {/* Redirige automáticamente a /inicio */}
      <Route path="/depensar" element={<Navigate to="/inicio" />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/sobre_mi" element={<SobreDerlis />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contactame />} />
    </Routes>
  </>
      
    
  )
}

export default App
