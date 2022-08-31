import estilos from './Footer.module.css';


export default function Footer() {
  return (
    <footer className={estilos.footer}>
      <div className={estilos.text} >
        <strong>Copyright &copy; 2022 <a className={estilos.link} href="https://codejr.com.br" target="_blank">Code Jr</a>.</strong> Todos direitos
        reservados.
      </div>
    </footer>
  );
}

