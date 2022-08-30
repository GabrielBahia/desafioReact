import estilos from './SecaoInfo.module.css';


export default function SecaoInfo() {
    return (
        <section className={estilos.secaoInfoArea}>

            <div className={estilos.container}>
                <img className={estilos.img1} src="/img/info1.png" alt="Banner" />
                <div className={estilos.text1}>
                    <h1 className={estilos.title1} >Code Jr.</h1>
                    <h3>* Fundada em 2014 por alunos da UFJF, a Code é uma empresa júnior
                        atuante no mercado de computação que trabalha com soluções
                        tecnológicas como sites e sistemas. Como filosofia interna, buscamos sempre melhorar tudo o que estiver a nosso alcance, visando sempre oferecer serviços de melhor qualidade a quem merece o melhor.</h3>
                    <h3>* Com uma cultura voltada ao cliente, estamos sempre investindo em
                        novas tecnologias e qualificação dos membros, para que nossas
                        soluções sejam entregues com muita eficiência e qualidade,
                        simplesmente por acreditar que a satisfação de nossos clientes precisa ser completa.</h3>
                </div>
            </div>

            <div>
                <div className={estilos.container2}>
                    <div className={estilos.text1}>
                        <h1 className={estilos.title1} >Code Jr.</h1>
                        <h3>* Atualmente estamos entre as melhores empresas juniores de TI da zona da mata, sendo essa conquista de muito orgulho entre os membros da empresa, o que é reflexo do comprometimento de todos e da clareza dos nossos objetivos.</h3>
                    </div>
                    <div className={estilos.text1}>
                        <h1 className={estilos.title1} >Code Jr.</h1>
                        <h3>* Atualmente estamos entre as melhores empresas juniores de TI da zona da mata, sendo essa conquista de muito orgulho entre os membros da empresa, o que é reflexo do comprometimento de todos e da clareza dos nossos objetivos.</h3>
                    </div>  
                    <div className={estilos.text1}>
                        <h1 className={estilos.title1} >Code Jr.</h1>
                        <h3>* Atualmente estamos entre as melhores empresas juniores de TI da zona da mata, sendo essa conquista de muito orgulho entre os membros da empresa, o que é reflexo do comprometimento de todos e da clareza dos nossos objetivos.</h3>
                    </div>
                </div>
            </div>

            <div className={estilos.container}>
                <div className={estilos.text2}>
                    <h1 className={estilos.title2} >Melhores serviços do mercado!</h1>
                    <h3 className={estilos.title3} >Desenvolvimento de site expositivo</h3>
                    <p className={estilos.paragrafo} >Deseja divulgar sua marca e ter mais clientes? Nós desenvolvemos um site profissional para ajudar o seu negócio a alcançar esses objetivos.</p>
                    <h3 className={estilos.title3} >Aplicativos</h3>
                    <p className={estilos.paragrafo} >Sua ideia pode ser materializada na palma da sua mão, seja qual for, nós construímos seu aplicativo para iOS e Android.</p>
                    <h3 className={estilos.title3} >Sistemas Web</h3>
                    <p className={estilos.paragrafo} >Uma forma rápida de organizar e consultar toda a papelada da sua empresa, além de facilitar diversos processos.</p>
                    <h3 className={estilos.title3} >Sistema EJ</h3>
                    <p className={estilos.paragrafo} >É a nossa solução pensada especialmente para Empresa Juniores. Conheça nossa proposta para impulsionar e gerenciar a sua EJ!</p>
                </div>
                <img className={estilos.img2} src="/img/info2.png" alt="Banner" />
            </div>

        </section>
    );
}

