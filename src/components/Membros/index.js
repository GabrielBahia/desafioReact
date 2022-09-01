import axios from 'axios';
import { useEffect, useState } from 'react';
import estilos from './Membros.module.css';


const Membros = () => {

  const [membros, setMembros] = useState([]);

  useEffect(() => {
    // obter membros
    axios.get('http://localhost:3000/members')
      .then(resposta => {
        setMembros(resposta.data)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])



  return (
    <section>
        { membros.map((membro) => <p key={membro.id}> {membro.name}</p> )}
    </section>)
}

export default Membros