import React from 'react';
import Frutas from './Frutas'
import Resumo from './Resumo'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      idade: 0,
      resumo: '',
      fruta: 'laranja',
      formularioComErros: false,
     }
    this.handleChange = this.handleChange.bind(this);
    this.validar = this.validar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validar()
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
  }
  
  validar() {
   const frm = this.state;
 //Verifica se o campo nome foi preenchido e
    //contém no mínimo três caracteres.
    if(frm.nome === "" || frm.nome == null || frm.nome.length < 3) {
      //É mostrado um alerta, caso o campo esteja vazio.
      alert("Por favor, indique o seu nome.");
      this.setState({ formularioComErros: true });
      //o form não é enviado.
      return false;
    }
    //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if(frm.idade == null || frm.idade === 0) {
        alert("Por favor, indique sua idade.");
        this.setState({ formularioComErros: true });
        return false;
    }
    
    if(frm.resumo === '' || frm.resumo.length < 5) {
        alert("Informe sobre você");
        this.setState({ formularioComErros: true });
        return false;
    }
    this.setState({ formularioComErros: false })
  }

  render() {
    return (
      <div>
        <form className='formulario' onSubmit={this.handleSubmit}>
          <Frutas value={ this.state.frutas } handleChange={ this.handleChange }/>
          <br />
          <label>Nome:
            <input 
              name='nome'
              type='text'
              value={ this.state.nome }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label>Idade:
            <input
            name='idade'
            type='number'
            value={ this.state.idade }
            onChange={ this.handleChange }
            />
          </label>
          <br />
          <Resumo value={ this.state.resumo } handleChange={ this.handleChange }/>
          <br />
          <label>Envie seu currículo:
            <input
            type='file'
            name='cv'
            ref={this.fileInput}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;