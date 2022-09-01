import estilos from './Members.module.css';
import Banner from '../../components/Banner';
import Membros from '../../components/Membros';
import MembroCard from '../../components/MembroCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Members = () => {

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
        <div className={estilos.members}>
            <Banner />
            <div className={estilos.title}>
                <h1 className={estilos.titleStyle} >Membros da Code Jr</h1>
            </div>
            <div className={estilos.areaMembers}> 
                <div className={estilos.container}>
                    { membros.map((membro) => <MembroCard key={membro.id} name={membro.name} email={membro.email} 
                    aniversario={membro.aniversario} departamentos={membro.departamentos} cargo={membro.cargo} /> )} 
                </div>
            </div>
        </div>
    )
}

export default Members

