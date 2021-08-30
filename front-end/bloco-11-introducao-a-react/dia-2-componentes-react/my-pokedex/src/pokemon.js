import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='eachPoke'>
        <div className='textPoke'>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>{`Avg Wgt: ${this.props.pokemon.averageWeight.value} ${this.props.pokemon.averageWeight.measurementUnit}`}</p>
        </div>
        <img src={this.props.pokemon.image} alt={this.props.pokemon.name}></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Pokemon;