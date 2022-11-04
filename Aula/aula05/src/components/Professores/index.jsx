function Professores(props) {
    return (
        <>
            <h2>{`id: ${props.professores.id}`}</h2>
            <h2>{`Nome: ${props.professores.nome}`}</h2>
            <h2>{`Matérias: ${props.professores.materias.map(item => `${item})}`}</h2>
            <br />
        </>
    )
}

export default Professores