import React from 'react';

class TodoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos: []
    }
  }

  render(){
    return(
      <h1>Here come the todos</h1>
    )
  }
}

export default TodoContainer;
