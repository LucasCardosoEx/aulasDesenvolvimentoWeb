
import './App.css';
import Professores from './components/Professores';

function App() {

  // const nome = "Nahida"
  // const nome2 = "Dehya"
  // const nome3 = "Yelan"

  //Declarando Variáveis de uma maneira mais facil
  // const nomes = ["Nahida", "Dehya", "Yelan"]

  // nomes.forEach((item) => {
  //   console.log(item);
  // })


  // const coisas = ["Pedro", null, true]
  // const arrayDeObjetos = [
  //   { nome: "nahidaArray", id: 1, materias: ["Catalisador", "Dendro"] },
  //   { nome: "dehyaArray", id: 2 },
  //   { nome: "yelanArray", id: 3 }
  // ]

  // //ver tamanho do array
  // console.log(nomes.length)

  // //acessar 1 elemento do array
  // console.log(nomes[0])

  // console.log(arrayDeObjetos)
  // console.log(arrayDeObjetos[0].nome)
  // console.log(arrayDeObjetos[0].materias[1])

  // const novoArray = nomes.map((nome, index) => {
  //   if (index > 1) return
  //   console.log(nome)
  //   return <h1>nome</h1>
  // })

  // console.log("novoArray", novoArray)

  // const renderizaNomes = () => {
  //   nomes.map((item, index) => {
  //     return <h1 key={index}>{item}</h1>
  //   })
  // }
  const contatos = [
    { id: 1, nome: "Nahida", email: "nahida@gmail.com" },
    { id: 2, nome: "Dehya", email: "dehya@gmail.com" },
    { id: 3, nome: "Eula", email: "eula@gmail.com" }
  ]

  const professores = [
    { id: 1, nome: "Deby", materias: ["Lógica de Programação", "Banco de Dados"] },
    { id: 2, nome: "Roni", materias: ["Programação orientada a Objetos", "API Restful"] },
    { id: 3, nome: "Bula", materias: ["Programação orientada a Objetos", "API Restful"] },
  ]


  return (

    <>
      {professores.map((item) => {
        return <Professores professores={item} key={item.id} />
      })}
      {/* {contatos.map((poxa) => {
      return <Contato carro={poxa} key={poxa.id} />
    })} */}

      {/* {nomes.map((item, index) => {
        return <h1 key={index}>{item}</h1>
      })}

      {renderizaNomes} */}
    </>
  )
}

export default App
