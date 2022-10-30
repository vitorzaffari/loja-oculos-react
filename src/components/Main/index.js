import React from "react";
import SecaoCapa from "../SecaoCapa";
import SecaoContato from "../SecaoContato";
import SecaoProdutos from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";

class Main extends React.Component{
    render(){
        return(
            <div>
                <SecaoCapa/>
                <SecaoProdutos/>
                <SecaoSobre/>
                <SecaoContato/>
            </div>
        )
    }
}

export default Main;