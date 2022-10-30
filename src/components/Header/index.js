import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="limitar-secao topo">
                    <img src="\assets\imagens\logo.png" alt="Óticas Vida" title="Óticas Vida" />
                    <nav>
                        <a href="#produtos">PRODUTOS</a>
                        <a href="#sobre">SOBRE</a>
                        <a href="#contato">CONTATO</a>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;