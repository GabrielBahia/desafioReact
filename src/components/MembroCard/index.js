import estilos from './MembroCard.module.css';


export default function MembroCard (props) {
    return (
        <section className={estilos.areaCard}>
            <div className={estilos.imgCard}>
                <img className={estilos.img1} src="/img/ftPerfilMama.png" alt="Banner" />
            </div>
            <div className={estilos.titleCard}>
                <div><p>{ props.name }</p></div>
            </div>
            <div className={estilos.infoCard}>
                <div><p>{ props.email }</p></div>
                <div><p>{ props.aniversario }</p> </div>
                <div><p>{ props.departamentos }</p></div>        
                <div><p>{ props.cargo }</p> </div>    
            </div>
        </section>
  );
}

