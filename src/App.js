import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, title: 'first to do'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item, index)=>{
      return <li>{item.title}</li>
    });
    return (
      <div className="App">
        <h1>My To Do</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
