import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['estudar', 'academia', 'meditar', 'rezar'];

class App extends React.Component {
  render() {
    return (
      <ol>{ tarefas.map((tarefa) => Task(tarefa)) }</ol>
    )
  }
}

export default App;