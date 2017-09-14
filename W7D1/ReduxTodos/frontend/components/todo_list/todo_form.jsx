import React from "react";
import { receiveTodo } from "../../actions/todo_actions"

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      done: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    recieveTodo({[uniqueId]: this.state});
  }

  handleChange(event) {
    event.preventDefault();

    console.log(`1: ${event.target.value}`);
    console.log(`2: ${event.target.value}`);
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          New Todo
          <br />
          <label>
            title
            <input id="title" type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <br />

          <label>
            body
            <textarea id="body" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />

          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default TodoForm;
