import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: newTodo.task,
        isCompleted: false
      })
    })
      .then(res => res.json())
      .then(task => {
        const newArray = this.state.todos.slice();
        newArray.push(task);
        this.setState({
          todos: newArray
        });
      });
  }

  toggleCompleted(todoId) {
    const todos = this.state.todos;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todoId === todoId) {
        const flippedObj = {
          isCompleted: !todos[i].isCompleted
        };

        fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            isCompleted: flippedObj.isCompleted
          })
        })
          .then(res => res.json())
          .then(todo => {
            const todosCopy = this.state.todos.slice();
            todosCopy[i] = todo;
            this.setState({
              todos: todosCopy
            });
          });
      }
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
