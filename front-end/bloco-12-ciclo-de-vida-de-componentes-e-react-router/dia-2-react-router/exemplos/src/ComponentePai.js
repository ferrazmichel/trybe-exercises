import React from 'react';

const ComponentePai = (props) => {
    console.log(props.children);
    return (
      <div>
        {props.children}
      </div>
    )
  }

  export default ComponentePai;
