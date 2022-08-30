import estilos from './Members.module.css';
import Banner from '../../components/Banner';


const Members = () => {
    return (
    <div className={estilos.members}>
        <Banner /> 
        <h1>Membros:</h1>
    </div>
    )
}
  
  export default Members

