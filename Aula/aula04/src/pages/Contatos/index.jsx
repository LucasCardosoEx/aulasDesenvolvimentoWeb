import { Link } from "react-router-dom"


const Contatos = () => {

    const contato = {
        id: "1",
        name: "Genshin Impact",
        email: "mihoyo@gmail.com",
        site: "https://genshin.hoyoverse.com/"

    }

    return (
        <>
            <h1>CONTATOS</h1>
            <Link to='/'>HOME - </Link>
            <Link to='/galeria'>GALERIA - </Link>
            <Link to='/FaleConosco'>FALE CONOSCO</Link>

            <ul>
                <li><Link to={`/contatos/${contato.id}`} state={{ data: contato }}>Genshin Impact</Link></li>
                <li><Link to="/contatos/2">Overwatch 2</Link></li>
                <li><Link to="/contatos/3">League of Legends</Link></li>

            </ul>
        </>
    )
}

export { Contatos }

