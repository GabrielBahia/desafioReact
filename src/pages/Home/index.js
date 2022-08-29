import estilos from './Home.module.css';
import Banner from '../../components/Banner';


const Home = () => {
    return (
    <div>
        <h1 className={estilos.home} > Home </h1>
         <Banner />
    </div>
    )
}
  
  export default Home

