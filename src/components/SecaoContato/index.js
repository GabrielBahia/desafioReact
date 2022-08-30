import estilos from './SecaoContato.module.css';


export default function SecaoContato() {
  return (
    <section className={estilos.secaoContatoArea}>
      <div> <h1>Entre em contato </h1> </div>
      <div className={estilos.container}>
        <div class="item">Telefone: </div>
        <div class="item">(31) 98229-3024</div>
        <div class="item">Email:</div>
        <div class="item">contato@codejr.com.br</div>
      </div>
    </section>
  );
}

