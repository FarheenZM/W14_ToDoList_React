import React from 'react';
import TodosList from '../components/TodosList'

class TodoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos: ["Eat", "Sleep", "Repeat"]
    }
  }

  render(){
    return(
      <TodosList todos={this.state.todos}/>
    )
  }
}

export default TodoContainer;
