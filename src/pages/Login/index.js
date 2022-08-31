import estilos from './Login.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';

const Login = () => {
    return (
    <div className={estilos.login}>
        <Banner />  
        <Form />  
    </div>
    )
}
  
  export default Login

