import React from "react";

class SecaoContato extends React.Component {
    render() {
        return (
            <section id="contato">
                <div className="limitar-secao">
                    <h2>FALE CONOSCO</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                    <div className="contatos-box">
                        <div className="contato-redesocial">
                            <h4>Contato</h4>
                            <div>
                                <img src="\assets\imagens\local.png" alt=" " />
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                            <div>
                                <img src="\assets\imagens\telefone.png" alt=" " />
                                <p>(21) 9999-9999</p>
                            </div>
                            <div>
                                <img src="\assets\imagens\email.png" alt=" " />
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                        <div className="contato-redesocial">
                            <h4>Nossas Redes Sociais</h4>
                            <div>
                                <img src="\assets\imagens\fb.png" alt=" " />
                                <p>/OticaVida</p>
                            </div>
                            <div>
                                <img src="\assets\imagens\ig.png" alt=" " />
                                <p>@oticavidarj</p>
                            </div>
                            <div>
                                <img src="\assets\imagens\tt.png" alt=" " />
                                <p>@oticavidarj</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SecaoContato;