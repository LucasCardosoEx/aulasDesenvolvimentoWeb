function Professores(props) {
    return (
        <>
            <h2>{`id: ${props.professores.id}`}</h2>
            <h2>{`Nome: ${props.professores.nome}`}</h2>
            <h2>{`Matérias: ${props.professores.materias}`}</h2>
            <br />
        </>
    )
}

export default Professores