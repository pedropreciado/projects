import {RECEIVE_TODO} from "../actions/todo_actions";
import {RECEIVE_TODOS} from "../actions/todo_actions";
import {merge} from "lodash";


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {

  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      for (let key in action.todos) {
        newState[key] = action.todos[key];
      }
      return newState;
    case RECEIVE_TODO:
      const id = action.todo.id;

      const newTodo = {[id]: action.todo};
      return merge(state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;
