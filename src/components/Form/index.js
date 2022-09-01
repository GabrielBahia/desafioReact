import estilos from './Form.module.css';


export default function Form() {
  return (
    <section className={estilos.formArea}>
      <div className={estilos.container}>
            <form className={estilos.form} action="/adm" method="get" id="form">
              <h1 className={estilos.label3}>Login</h1>
                <div>
                    <label className={estilos.label1} for="email">Email:</label>
                    <input className={estilos.input1} required type="email"/>
                </div>
                    
                <div>
                    <label className={estilos.label1}  for="password">Senha:</label>
                    <input className={estilos.input1} required type="password"/>
                </div>
                <div>
                    <button className={estilos.btn1} type="submit" form="form">Entrar</button>
                </div>
            </form>
      </div>
    </section>
  );
}

