import { useState } from "react";
import './index.css';

const Agua = () => {
    const [copo, setCopo] = useState(0)
    const [ml, setMl] = useState(0)
    const [meta, setMeta] = useState(0)
    const [total, setTotal] = useState(0)
    const [mensagem, setMensagem] = useState("")
    const [registro, setRegistro] = useState("")

    const date = new Date().toLocaleString();

    const adcionar = () => {
        setCopo(copo + 1)
        setTotal(ml * (copo + 1))
        metaDiaria("");
        setRegistro(date + registro)
    }

    const resetar = () => {
        setCopo(0)
        setMl(0)
        setTotal(0)
        setMensagem("Meta ainda não atingida")
        setRegistro("")
    }

    const metaDiaria = () => {
        if ((ml * copo) >= meta) {
            setMensagem("Parabéns! Você concluiu sua meta diária.")
        }
    }

    return (
        <div>
            <h1 className="titulo">Bo'ohw'o'wo'er</h1>

            <label>Meta diária: </label>
            <input type="number"
                placeholder="Ex.: 3000ml"
                value={meta}
                onChange={e => setMeta(e.target.value)}
            />

            <label> ml do seu copo </label>
            <input type="number"
                placeholder="Ex.: 200ml"
                value={ml}
                onChange={e => setMl(e.target.value)}
            />

            <h1>Calcular</h1>
            <button onClick={() => setCopo(adcionar)}>Copo +1</button>
            <button onClick={() => setCopo(resetar)}>Resetar/Zerar Copos</button>


            <h3>Bebeu {copo} copo(s) de água.</h3>
            <h3>{total}ml</h3>
            <h3>Meta diária: {meta}ml</h3>
            <h3>{mensagem}</h3>
            <h3>Histórico:{registro}</h3>
        </div>
    )
}

export default Agua