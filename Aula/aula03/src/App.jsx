import { useState } from 'react'
import './App.css'


function App() {
  const [textoDigitado, setTextoDigitado] = useState("")
  //const [textoExibido, setTextoExibido] = useState("")

  const handleText = () => {
    console.log("Passar o texto digitado")
    //setTextoExibido(textoDigitado)
  }

  const handleTextoDigitado = (e) => {
    console.log(e.target.value)
    setTextoDigitado(e.target.value)
  }

  return (

    <>
      <h1> Inputs Controlados</h1>
      <h1> Informação Digitada: {textoDigitado} </h1>
      <input
        type="text"
        placeholder='Digite seu texto aqui'
        // onChange={e => setTextoDigitado(e.target.value)} 
        // onChange={e => handleTextoDigitado(e.target.value)} 
        onChange={handleTextoDigitado}
        value={textoDigitado}
      />
      <button
        onClick={handleText}>Enviar</button>
    </>
  )
}

export default App
