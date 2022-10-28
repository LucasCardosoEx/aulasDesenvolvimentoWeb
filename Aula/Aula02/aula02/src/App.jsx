import { useState } from 'react'
import './App.css'

//ERRO NO VALOR - PROBLEMAS NA FILA DE EXECUÇÃO
// setContador(contador + 1)
// setContador(contador + 1)
// setContador(contador + 1)

// Assim funciona =)
// setContador( prevState => prevState + 1)
// setContador( prevState => prevState + 1)
// setContador( prevState => prevState + 1)

//funções 
function App() {
  const [contador, setContador] = useState(0)


  // function clique() {
  //   setContador(contador + 1)
  //   console.log(contador)

  // }
  // function reset() {
  //   setContador(contador - contador)
  //   console.log(contador)
  // }

  // return (
  //   <>
  //     <h1>Contador: {contador}</h1>
  //     <button onClick={clique}>+1</button>
  //     <button onClick={reset}>Reset</button>
  //   </>
  // )

  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>
      <button onClick={() => setContador(contador - contador)}>reset</button>
    </>
  )
}

export default App
