import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: ""
    }
  }

  render(){
    return(
      <form className="todo-form">
        <input type="text" placeholder="What's needing done, like?"/>
        <input type="submit" value="Get it done"/>
      </form>
    )
  }
}

export default TodoForm;
