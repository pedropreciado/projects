export const allTodos = ({todos}) => {
  let array = Object.keys(todos).map(id => todos[id]);
  return array;
}
