import estilos from './FormMembro.module.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom'


export default function FormMembro() {

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

    const aoSubmeterForm = (evento) => {
        evento.preventDefault()

        if(parametros.id){
            axios.put(`http://localhost:3000/members/${parametros.id}`, {
                name: name,
                email: email,
                aniversario: aniversario,
                departamentos: departamentos,
                cargo: cargo
            })
                .then(() => {
                    alert("Membro atualizado com sucesso!")
                    
                })
        }
        else {
            axios.post('http://localhost:3000/members', {
                name: name,
                email: email,
                aniversario: aniversario,
                departamentos: departamentos,
                cargo: cargo
            })
                .then(() => {
                    alert("Membro criado com sucesso!")
                })
        }


    }

    return (
        <section className={estilos.formArea}>
            <div className={estilos.container}>
                <form className={estilos.form} onSubmit={aoSubmeterForm} method="get" id="form">

                    <label className={estilos.label1} for="name">Nome:</label>
                    <input value={name}
                            onChange={evento => setName(evento.target.value)} 
                            className={estilos.input1} 
                            required type="name" 
                    />

                    <label className={estilos.label1} for="email">Email:</label>
                    <input value={email}
                            onChange={evento => setEmail(evento.target.value)}  
                            className={estilos.input1} 
                            required type="email" 
                    />
                
                    <label className={estilos.label1} for="aniversario">Aniversario:</label>
                    <input value={aniversario}
                            onChange={evento => setAniversario(evento.target.value)}  
                            className={estilos.input1} 
                            required type="date" 
                    />
                
                    <label className={estilos.label1} for="departamentos">Departamentos:</label>
                    <input value={departamentos}
                            onChange={evento => setDepartamentos(evento.target.value)}  
                            className={estilos.input1} 
                            required type="text" 
                    />
                
                    <label for="cargo">Cargo:</label>
                    <select value={cargo}
                            onChange={evento => setCargo(evento.target.value)}  
                            required id="cargo">
                        <option for="cargo" id="assessor" name="assessor" value="assessor">assessor</option>
                        <option for="cargo" id="gerente" name="gerente" value="gerente">gerente</option>
                        <option for="cargo" id="diretor" name="diretor" value="diretor">diretor</option>
                    </select>
                
                    <div className={estilos.btnStyle}>
                        <button className={estilos.btn1} type="submit" form="form">Cadastrar</button>   
                    </div>
                </form>
                <button className={estilos.btn1}><RouterLink to={'/adm'}>Voltar</RouterLink></button>
            </div>
        </section>
    );
}

