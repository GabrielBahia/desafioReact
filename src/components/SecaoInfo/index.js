import estilos from './SecaoInfo.module.css';


export default function SecaoInfo() {
    return (
        <section className={estilos.secaoInfoArea}>

            <div className={estilos.container}>
                <div className={estilos.containerArea} >                
                    <div className={estilos.areaImg}>
                        <img className={estilos.img1} src="/img/info1.png" alt="Banner" />
                    </div>    
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
            </div>

            <div className={estilos.container2}>
                <div className={estilos.container2Area}>
                    <div className={estilos.text1}>
                        <h1 className={estilos.title1} >Code Jr.</h1>
                        <h3>* Atualmente estamos entre as melhores empresas juniores de TI da zona da mata, sendo essa conquista de muito orgulho entre os membros da empresa, o que é reflexo do comprometimento de todos e da clareza dos nossos objetivos.</h3>
                        <h3>* Nós fazemos parte do Núcleo de Empresas Juniores da Zona da Mata mineira. Mais conhecido como Núcleo da Mata! #VaiMatao. Representamos o Movimento Empresa Júnior em Minas Gerais!
                        Federação das Empresas Juniores de Minas Gerais – FEJEMG
                        </h3>
                    </div>
                    <div className={estilos.areaImg}>
                        <img className={estilos.img3} src="/img/logoCode.png" alt="Banner" />
                    </div>
                </div>
            </div>


            <div className={estilos.container3}>
                <div className={estilos.container3Area}>
                    <div className={estilos.text12}>
                        <h1 className={estilos.title4} >Missão</h1>
                        <div className={estilos.iconStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                            </svg>
                        </div>
                        <h3>Transformar pessoas e empresas por meio da tecnologia, formando líderes e desenvolvendo o país.</h3>
                    </div>
                    <div className={estilos.text12}>
                        <h1 className={estilos.title4} >Visão</h1>
                        <div className={estilos.iconStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-bar-graph-fill" viewBox="0 0 16 16">
                                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
                            </svg>
                        </div>
                        <h3>Ser referência no Brasil por meio de produtos escaláveis de impacto nacional.</h3>
                    </div>
                    <div className={estilos.text12}>
                        <div className={estilos.titleStyle}>
                            <h1 className={estilos.title4} >Valores</h1>
                        </div>
                        <div className={estilos.iconStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                            </svg>
                        </div>
                        <h3>Crescer juntos, orgulho de ser Code, desenvolvedora de talentos, empatia.</h3>
                    </div>
                </div>
            </div>

            <div className={estilos.container4}>
                <div className={estilos.container4Area}>
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
            </div>

        </section>
    );
}

