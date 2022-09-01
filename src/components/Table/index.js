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
    }, [])


    const excluir = (membroAhSerExcluido) => {
        axios.delete(`http://localhost:3000/members/${membroAhSerExcluido.id}`)
            .then(() => {
                const listaMembros = membros.filter(membro => membro.id !== membroAhSerExcluido.id)
                setMembros([...listaMembros])
            })
    }

    return (
        <section className={estilos.container}>

            <div className={estilos.titleArea}>
                <h1 className={estilos.titleStyle} >Administração de Membros</h1>
            </div>

            <div className={estilos.btnArea}>
                <button className={estilos.btnCriar} type="button"><RouterLink className={estilos.linkCriar} to={'/adm/criar'}>Adicionar novo membro</RouterLink>
                </button>
            </div>

            <div className={estilos.container2}>
                <div className={estilos.tableArea}>
                    <table className={estilos.table} border="1">
                        <tr>
                            <td width="80%">Nome</td>
                            <td width="20%">Ações</td>
                        </tr>
                        {membros.map((membro) =>
                            <tr key={membro.id}>
                                <td>{membro.name}</td>
                                <td>
                                    <button className={estilos.btns} type="button"><RouterLink className={estilos.links} to={`/adm/ver/${membro.id}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                    </svg></RouterLink>
                                    </button>

                                    <button className={estilos.btns} type="button" ><RouterLink className={estilos.links} to={`/adm/criar/${membro.id}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg></RouterLink>
                                    </button>

                                    <button className={estilos.btn2} type="button" color="error" onClick={() => excluir(membro)}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                    </button>
                                </td>
                            </tr>)}

                    </table>
                </div>
            </div>
        </section>
    );
}

