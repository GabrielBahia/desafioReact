import estilos from './Administracao.module.css';
import Banner from '../../../components/Banner';
import Table from '../../../components/Table';


const Administracao = () => {

    return (
        <section className={estilos.adm}>
            <div> 
                <Table />
            </div>
        </section>)
}

export default Administracao

