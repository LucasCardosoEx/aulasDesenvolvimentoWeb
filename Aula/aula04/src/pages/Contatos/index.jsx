import { Link } from "react-router-dom";


export const Contatos = () => {

    const contato = {
        id: 1,
        nome: "Genshin Impact",
        email: 'myhoio@gmail.com'
    }

    const contato2 = {
        id: 2,
        nome: "Overwatch 2",
        email: "blizzard@gmail.com"
    }

    return (
        <>
            <h1>CONTATOS</h1>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/galeria">GALERIA</Link>
                </li>
            </ul>

            <ol>
                <li><Link to={`/contatos/${contato.id}`} state={{ nome: contato.nome, id: contato.id }}>Genshin Impact</Link></li>
                <li><Link to={`/contatos/${contato2.id}`} state={{ nome: contato2.nome, id: contato2.id }}>Overwatch 2</Link></li>
                <li><Link to="/contatos/3">League of Legends</Link></li>
            </ol>
        </>
    );
}

