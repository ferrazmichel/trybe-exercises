import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = { nome: '' }
    this.handleNameChange = this.handleNameChange.bind(this)

  }

  handleNameChange(event) {
    this.setState({ nome: event.target.value })
  }
  
  render() {
    return (
      <div>
        <form className='formulario'>
          <label>Fruta Favorita:
            <select name='fruta'>Fruta favorita
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </label>
          <label>Nome:
            <input 
              name='nome'
              type='text'
              value={ this.state.nome }
              onChange={ this.handleNameChange }
            />
          </label>
          <label>Idade:
            <input name='idade' type='number' />
          </label>
          <label>Sobre você:
            <textarea name='resumo'></textarea>
          </label>
        </form>
      </div>
    )
  }
}

export default Form;