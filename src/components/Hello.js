import React from 'react';

const Hello = () =>{

    // return (
    // <div>
    //     <h1>Hello Tiago</h1>
    // </div>
    // )

    return React.createElement('div', {id: "idParaADiv"}, React.createElement('h1', null, 'Hello Tiago'))

}

export default Hello;