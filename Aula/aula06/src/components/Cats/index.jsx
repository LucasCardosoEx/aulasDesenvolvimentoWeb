import { useEffect, useState } from 'react'
import api from '../../service/api'


function Cats() {
  const [cats, setCats] = useState([])

  const getCat = async () => {
    const { data } = await api.get("/images/search")
    setCats(data)
    console.log(data)
  }

  useEffect(() => {
    getCat();
  }, [])

  return (
    <>
      <h1>Use Effect 🐈🐈‍⬛</h1>
      <h1>{cats.length > 0 && cats[0].url}</h1>
      {cats.length > 0 ? (
        <img src={cats[0].url} alt="Gatinho" />
      ) : (
        <h1>Sem Imagem no momento</h1>
      )}
      <br />
      <a href=""><button>Proxima Imagem href</button></a>
      <button onClick={() => getCat()}>Proxima Imagem onClick</button>
    </>
  );
}

export default Cats