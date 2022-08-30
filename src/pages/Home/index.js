import estilos from './Home.module.css';
import Banner from '../../components/Banner';
import SecaoInfo from '../../components/SecaoInfo';
import SecaoContato from '../../components/SecaoContato';


const Home = () => {
    return (
    <div className={estilos.home}>
        <Banner />  
        <SecaoInfo /> 
        <SecaoContato /> 
    </div>
    )
}
  
  export default Home

