import React from "react";

// function Greet() {
//     return <h1>Teste de Função</h1>
// }


// Sintaxe melhorada
// export diretamente na função
export const Greet = (props) => {
    return (
        <div>
            <h1>Teste de Função feita por {props.name} que é um dev {props.dev}</h1>
            {props.children /*Esse children é para que o parágrafo no meio do componente no APP.JS apareça */} 
        </div>
 )}     

// export default Greet;