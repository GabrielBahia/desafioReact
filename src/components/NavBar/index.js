import { Link } from 'react-router-dom';

export default function NavBar() {
  const rotas = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Membros',
    to: '/membros'
  }, {
    label: 'Adm',
    to: '/adm'
  }];
  return (
    <nav >
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