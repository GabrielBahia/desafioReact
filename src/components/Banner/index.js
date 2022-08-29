import estilos from './Banner.module.css';


export default function Banner() {
  return (
  <section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <img className={estilos.banner} src="/img/banner.png" alt="Banner"/>
    </div>
  </section>
  );
}

