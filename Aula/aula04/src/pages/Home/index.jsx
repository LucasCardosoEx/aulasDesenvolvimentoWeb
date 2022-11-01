import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>COMPONENTE HOME</h1>
            <Link to='/contatos'>CONTATOS - </Link>
            <Link to='/galeria'>GALERIA - </Link>
            <Link to='/FaleConosco'>FALE CONOSCO</Link>
        </>
    )
}

export default Home