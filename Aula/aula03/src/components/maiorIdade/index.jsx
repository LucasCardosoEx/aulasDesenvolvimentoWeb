import { useState } from 'react';

function VerificarIdade() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [mensagem, setMensagem] = useState("")

    const calcularIdade = () => {
        if (idade < 18) {
            console.log("Olá " + nome + " voce é menor de idade")
            setMensagem("Olá " + nome + " voce é menor de idade")
        } else {
            console.log("Olá " + nome + " voce é maior de idade")
            setMensagem("Olá " + nome + " voce é maior de idade")
        }
    };


    return (
        <>
            <div>
                <h1>Verificar Idade</h1>

                <h2>Nome</h2>
                <input
                    type="text"
                    placeholder='Digite seu nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />

                <h2>Idade</h2>
                <input
                    type="number"
                    placeholder='Digite sua idade'
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)} />

                <button onClick={calcularIdade}>Conferir</button>

                <h2>{mensagem}</h2>

            </div>
        </>
    );
}

export default VerificarIdade
