import React from "react";

const TodoListItem = ({ item }) => (
  <div>
    <li>
      {item.title}
    </li>
  </div>
)

export default TodoListItem;
