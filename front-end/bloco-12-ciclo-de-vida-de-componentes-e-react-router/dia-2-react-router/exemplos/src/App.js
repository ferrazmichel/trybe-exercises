import React from 'react'
import ComponentePai from './ComponentePai';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

export default App;
