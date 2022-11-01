import { useLocation, useParams } from "react-router-dom"

const ContatoDetalhes = () => {
    const { id } = useParams()
    const { state } = useLocation()

    console.log(state.data)

    const renderizaNome = () => {
        switch (id) {
            case '1': return "Genshin Impact"
                break;
            case '2': return "Overwatch 2"
                break;
            case '3': return "League of Legends"
                break;
            default:
                "Desconhecido"
                break;
        }
    }

    //Renderização condicional atraves do if
    if (id == '1') {
        return <h1>Genshin que veio do if</h1>
    }

    return (
        <h1>
            {/* Renderização condicional com operador lógico */}
            {id == '2' && "Overwatch 2 que veio do &&"}
            {/* Contato: {renderizaNome()} */}
            {/* Renderização condicional com operador ternário */}
            {id == 3 ? "LoL do Operador Ternário" : null}
        </h1>
    );
}

export default ContatoDetalhes