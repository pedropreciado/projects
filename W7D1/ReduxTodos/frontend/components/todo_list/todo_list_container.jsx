import { connect } from "react-redux";
import TodoList from "./todo_list.jsx";
import { receiveTodo } from "../../actions/todo_actions";

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(recieveTodo(todo))
});


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default ListContainer;
