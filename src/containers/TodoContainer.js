import React from 'react';
import TodosList from '../components/TodosList';
import TodoForm from '../components/TodoForm';

class TodoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos: ["Eat", "Sleep", "Repeat"]
    }
  }

  render(){
    return(
      <React.Fragment>
        <TodoForm/>
        <TodosList todos={this.state.todos}/>
      </React.Fragment>
    )
  }
}

export default TodoContainer;
