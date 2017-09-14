import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";

import App from "./components/app";
import Root from "./components/root";
import TodoList from "./components/todo_list/todo_list";

import {allTodos} from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

let store = configureStore();
window.store = store;

window.allTodos = allTodos;
