import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <ul>
          {this.props.todos.map((item, idx) => (
            <TodoListItem item={item} />
          ))}
        </ul>
        <TodoForm />
      </div>
  )
}
};

export default TodoList;
export default this.props.recieveTodo;
