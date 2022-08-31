import estilos from './Table.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Table() {

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
    }, [membros])

  return (
    <section className={estilos.container}>
        <div className={estilos.tableArea}>
            <table className={estilos.table} border="1">
                <tr>
                    <td>Nome</td>
                    <td>Ações</td>
                </tr>
                {membros.map((membro) => <tr key={membro.id}>{membro.name} <hr></hr> </tr>)}
            </table>
        </div>
    </section>
  );
}

