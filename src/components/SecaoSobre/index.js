import React from "react";

class SecaoSobre extends React.Component{
    render(){
        return(
            <section id="sobre">
                <div className="limitar-secao box-sobre">
                    <h2>QUEM SOMOS NÓS?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                    <div className="card-box">
                        <img src="\assets\imagens\loja.png" alt=" "/>
                        <div>
                            <h3>NOSSAS FILIAIS</h3>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>
                        <div>
                            <h3>ATENDIMENTO FLEXIVEL</h3>
                            <p>Nossa equipe possui é treinada para te atender</p>
                        </div>
                        <img src="\assets\imagens\atendimento.png" alt=" "/>
                    </div>
                </div>
            </section>
        )
    }
}

export default SecaoSobre;