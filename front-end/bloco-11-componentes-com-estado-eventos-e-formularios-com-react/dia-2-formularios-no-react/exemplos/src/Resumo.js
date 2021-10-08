import React from 'react';

class Resumo extends React.Component {
  render() {
        const { value, handleChange } = this.props;
    return (
    <label>Sobre você:
      <textarea
        name='resumo'
        value={ value }
        onChange={ handleChange }
      ></textarea>
    </label>
    )
  }
}
  
export default Resumo;