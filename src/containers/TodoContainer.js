import React from 'react';
import TodosList from '../components/TodosList';
import TodoForm from '../components/TodoForm';

class TodoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos: ["Eat", "Sleep", "Repeat"]
    }
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  handleTodoSubmit(todo){
    this.setState({todos: [...this.state.todos, todo]}) //square operator
    // const newTodoArray = this.state.todos.concat([todo]);
    // this.setState({todos: newTodoArray});
  }

  render(){
    return(
      <React.Fragment>
        <TodoForm onTodoSubmit={this.handleTodoSubmit}/>
        <TodosList todos={this.state.todos}/>
      </React.Fragment>
    )
  }
}

export default TodoContainer;
