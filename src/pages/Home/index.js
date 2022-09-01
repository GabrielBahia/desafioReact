import estilos from './Home.module.css';
import Banner from '../../components/Banner';
import SecaoInfo from '../../components/SecaoInfo';
import SecaoContato from '../../components/SecaoContato';


const Home = () => {
    return (
    <div className={estilos.home}>
        <Banner />  
        <di className={estilos.infosArea}>
            <SecaoInfo /> 
        </di>
        <div className={estilos.contatoArea}>
            <SecaoContato /> 
        </div>
    </div>
    )
}
  
  export default Home

