import estilos from './Adm.module.css';
import Banner from '../../components/Banner';
import Table from '../../components/Table';


const Members = () => {

    return (
        <section className={estilos.adm}>

            <div className={estilos.tabela}> 
                <Table />
            </div>

        </section>)
}

export default Members

