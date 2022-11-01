import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContatoDetalhes from './pages/ContatoDetalhes'
import { Contatos } from './pages/Contatos'
import { FaleConosco } from './pages/FaleConosco'
import Galeria from './pages/Galeria'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/contatos/:id" element={<ContatoDetalhes />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path='/FaleConosco' element={<FaleConosco />} />

      <Route path="*" element={<h1>Erro 404 - Página não Encontrada</h1>} />
    </Routes>
  )
}

export default App
