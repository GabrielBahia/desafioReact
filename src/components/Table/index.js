import estilos from './Table.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'

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


    const excluir = (membroAhSerExcluido) => {
        axios.delete(`http://localhost:3000/members/${membroAhSerExcluido.id}`)
            .then(() => {
                const listaMembros = membros.filter(membro => membro.id !== membroAhSerExcluido.id)
                setMembros([...listaMembros])
            })
    }

    return (
        <section className={estilos.container}>
            <h1>Administração de Membros</h1>
            <div>
                [ <RouterLink to={'/adm/criar'}>Adicionar novo membro</RouterLink> ]
            </div>
            <div className={estilos.tableArea}>
                <table className={estilos.table} border="1">
                    <tr>
                        <td>Nome</td>
                        <td>Ações</td>
                    </tr>
                    {membros.map((membro) =>
                        <tr key={membro.id}>
                            <td>{membro.name}</td>
                            <td>
                                [ <RouterLink to={`/adm/ver/${membro.id}`}>Ver</RouterLink> ]
                                [ <RouterLink to={`/adm/criar/${membro.id}`}>editar</RouterLink> ]
                                <button type="button" variant="outlined" color="error" onClick={() => excluir(membro)}>Deletar</button>
                            </td>
                        </tr>)}

                </table>
            </div>
        </section>
    );
}

