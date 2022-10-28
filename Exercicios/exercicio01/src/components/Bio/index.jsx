import './style.css';

function Bio(props) {
    return (
        <>
            <body className="bio">
                <h2>{props.frases}</h2>
                <button>Play it now</button>
            </body>
        </>
    )
}

export default Bio