import estilos from './ViewMembro.module.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';


export default function ViewMembro() {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            axios.get(`http://localhost:3000/members/${parametros.id}`)
                .then( (resposta) => {
                    setName(resposta.data.name)
                    setEmail(resposta.data.email)
                    setAniversario(resposta.data.aniversario)
                    setDepartamentos(resposta.data.departamentos)
                    setCargo(resposta.data.cargo)
                })
        }

    }, [parametros])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [aniversario, setAniversario] = useState('')
    const [departamentos, setDepartamentos] = useState([])
    const [cargo, setCargo] = useState('')

    return (
        <section className={estilos.formArea}>
            <div className={estilos.container}>
                    <div>
                        <label className={estilos.label2} for="name">Nome:</label>
                        <label className={estilos.label2}>{name}</label>
                    </div>
                    <div>
                        <label className={estilos.label1} for="email">Email:</label>
                        <label className={estilos.label1}>{email}</label>
                    </div>
                    <div>
                        <label className={estilos.label1} for="aniversario">Aniversario:</label>
                        <label className={estilos.label1}>{aniversario}</label>
                    </div>
                    <div>
                        <label className={estilos.label1} for="departamentos">Departamentos:</label>
                        <label className={estilos.label1}>{ departamentos }</label>
                    </div>
                    <div>
                        <label className={estilos.label1} for="cargo">Cargo:</label>
                        <label className={estilos.label1}>{ cargo }</label>
                    </div>
            </div>
        </section>
    );
}

