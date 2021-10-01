import React, { Component } from 'react';

class Message extends React.Component {
    // Escrever um programa que troque o texto h1 de 'bem vindo visitante' para 'obrigado por se inscrever'

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Obrigado por se inscrever'
        })
    }

    render(){
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Click me</button>
        </div>
    )};
    
}
 
export default Message;