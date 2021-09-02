import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  handleClick1 = (info) => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    console.log(info.target.style.backgroundColor);
    console.log(`Botão 1 ${this.changeBackColor(this.state.numeroDeCliques1)}`);

  }

  handleClick2 = (info) => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
    console.log(info.target.style.backgroundColor);
    console.log(`Botão 2 ${this.changeBackColor(this.state.numeroDeCliques2)}`);
  }

  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))

  }

  changeBackColor (number) {
    return number % 2 === 0 ? 'green' : 'brown'
  }

  render() {
    return <div>
      <button style={ { backgroundColor: this.changeBackColor(this.state.numeroDeCliques1) } } onClick={this.handleClick1}>Botão 1 - Count = { this.state.numeroDeCliques1 }</button>
      <button style={ { backgroundColor: this.changeBackColor(this.state.numeroDeCliques2) } } onClick={this.handleClick2}>Botão 2 - Count = { this.state.numeroDeCliques2 }</button>
      <button style={ { backgroundColor: this.changeBackColor(this.state.numeroDeCliques3) } } onClick={this.handleClick3}>Botão 3 - Count = { this.state.numeroDeCliques3 }</button>
    </div>
  }
}

export default App;
