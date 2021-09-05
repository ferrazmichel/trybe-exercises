import React from 'react';

class Frutas extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
    <label>Fruta Favorita:
    <select name='fruta' value={ value } onChange={ handleChange }>Fruta favorita
      <option value="laranja">Laranja</option>
      <option value="limao">Limão</option>
      <option value="coco">Coco</option>
      <option value="manga">Manga</option>
    </select>
  </label>
    )
  }
}
  
export default Frutas;