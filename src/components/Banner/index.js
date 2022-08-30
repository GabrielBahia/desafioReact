import estilos from './Banner.module.css';


export default function Banner() {
  return (
  <section className={estilos.bannerArea}>
    <div>
      <img className={estilos.banner} src="/img/banner.png" alt="Banner"/>
    </div>
  </section>
  );
}

