import React from "react";

class SecaoProdutos extends React.Component {
    render() {
        return (
            <section id="produtos">
                <div className="produtos-box limitar-secao">
                    <h2>NOSSOS PRODUTOS</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                    <div className="oculos-box">
                        <div className="card-oculos">
                            <h3>Óculos de grau</h3>
                            <img src="\assets\imagens\oculos01.png" alt="Óculos de grau" title="Óculos de grau" />
                            <p>R$ 500,00</p>
                        </div>
                        <div className="card-oculos">
                            <h3>Óculos transition</h3>
                            <img src="\assets\imagens\oculos02.png" alt="Óculos transition" title="Óculos transition" />
                            <p>R$ 750,00</p>
                        </div>
                        <div className="card-oculos">
                            <h3>Óculos de sol</h3>
                            <img src="\assets\imagens\oculos03.png" alt="Óculos de sol" title="Óculos de sol" />
                            <p>R$ 700,00</p>
                        </div>
                        <div className="card-oculos">
                            <h3>Óculos infantil</h3>
                            <img src="\assets\imagens\oculos04.png" alt="Óculos infantil" title="Óculos infantil" />
                            <p>R$ 500,00</p>
                        </div>
                    </div>
                    <p>Todos os nossos produtos incluem:</p>
                    <ul className="box-lista">
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default SecaoProdutos;