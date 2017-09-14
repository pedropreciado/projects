import { connect } from 'react-redux';

import TodoList from './todo_list';

// Actions
import { receiveTodo, receiveTodos, createTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import { receiveErrors, clearErrors } from "../../actions/error_actions"

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  receiveErrors: err => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
