import './style.css'

function Bio(props) {
    return (
        <div className="bio">
            <h2>{props.nome}</h2>
            <a href="https://www.youtube.com/watch?v=xntQdZmCm-I"><button>Descurso desmotivacional</button></a>
        </div>
    )
}

export default Bio