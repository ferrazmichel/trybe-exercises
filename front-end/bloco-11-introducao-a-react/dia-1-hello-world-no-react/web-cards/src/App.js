import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

const CardList = () => {
return (
  <div className="row">
    <div className="col-sm-4">
      <Card
        featureImage="https://i1.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/psg2-logo.png?w=512&ssl=88"
        title="How To Make Interactive ReactJS Form"
        description="Let's write some interactive form with React"
        link="https://sebhastian.com/interactive-react-form"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
        title="Babelify your JavaScript code"
        description="Babel make JavaScript code browser-compatible."
        link="https://sebhastian.com/babel-guide"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://www.atletico.com.br/uploads/2019/02/26143245/40237225573_8cb216bbc8_z.jpg"
        title="Aqui é Galo Doido!!!"
        description="CAM, uma vez até morrer"
        link="https://atletico.com.br/paginas/galo"
      />
    </div>
    
    <div className="col-sm-4">
      <Card
        featureImage="https://i1.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/psg-logo.png?w=312&ssl=1"
        title="PSG de cu é rola"
        description="O alienigena chegou!!"
        link="https://pt.psg.fr/"
      />
    </div>
    
    <div className="col-sm-4">
      <Card
        featureImage="https://www.atletico.com.br/uploads/2017/02/26143245/40237225573_8cb216bbc8_z.jpg"
        title="JavaScript Basics Before You Learn React"
        description="Learn the prerequisites of learning React fast"
        link="https://sebhastian.com/js-before-react"
      />
    </div>
    
  </div>
);
}

class App extends React.Component {
  render() {
    return (
      <CardList />
    )
  }
}

export default App;