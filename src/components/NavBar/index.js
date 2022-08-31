import { Link } from 'react-router-dom';
import estilos from './NavBar.module.css';


export default function NavBar() {
  const rotas = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Membros',
    to: '/membros'
  }, {
    label: 'Login',
    to: '/login'
  }];
  return (
    <nav className={estilos.navbar}>
      <ul >
        {rotas.map((rota, index) => (
          <li key={index} >
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}