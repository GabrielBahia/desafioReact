import estilos from './FormMembro.module.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';


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
                    <div>
                        <label className={estilos.label2} for="name">Nome:</label>
                        <input value={name}
                                onChange={evento => setName(evento.target.value)} 
                                className={estilos.input2} 
                                required type="name" 
                        />
                    </div>
                    <div>
                        <label className={estilos.label1} for="email">Email:</label>
                        <input value={email}
                                onChange={evento => setEmail(evento.target.value)}  
                                className={estilos.input1} 
                                required type="email" 
                        />
                    </div>
                    <div>
                        <label className={estilos.label1} for="aniversario">Aniversario:</label>
                        <input value={aniversario}
                                onChange={evento => setAniversario(evento.target.value)}  
                                className={estilos.input1} 
                                required type="date" 
                        />
                    </div>
                    <div>
                        <label className={estilos.label1} for="departamentos">Departamentos:</label>
                        <select value={departamentos}
                                onChange={evento => setDepartamentos(evento.target.value)}  
                                required id="departamentos">
                            <option for="cargo" id="projetos" name="projetos" value="projetos">projetos</option>
                            <option for="cargo" id="vpgg" name="vpgg" value="vpgg">vpgg</option>
                            <option for="cargo" id="marketing" name="marketing" value="marketing">marketing</option>
                            <option for="cargo" id="presidencia" name="presidencia" value="presidencia">presidencia</option>
                        </select>
                    </div>
                    <div>
                        <label for="cargo">Cargo:</label>
                        <select value={cargo}
                                onChange={evento => setCargo(evento.target.value)}  
                                required id="cargo">
                            <option for="cargo" id="assessor" name="assessor" value="assessor">assessor</option>
                            <option for="cargo" id="gerente" name="gerente" value="gerente">gerente</option>
                            <option for="cargo" id="diretor" name="diretor" value="diretor">diretor</option>
                        </select>
                    </div>


                    <div>
                        <button className={estilos.btn1} type="submit" form="form">Cadastrar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

