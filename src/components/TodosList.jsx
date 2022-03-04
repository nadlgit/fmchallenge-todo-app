import { todosFilterValues } from '../utils/config';
import { TodoItem } from './TodoItem';

export const TodosList = ({
  todos = [],
  setCompleted = () => {},
  deleteTodo = () => {},
  filter = todosFilterValues.ALL,
}) => {
  const filteredTodos = todos.filter(
    (item) =>
      filter === todosFilterValues.ALL ||
      (filter === todosFilterValues.ACTIVE && item.isCompleted !== true) ||
      (filter === todosFilterValues.COMPLETED && item.isCompleted === true)
  );
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo?.id}>
          <TodoItem
            text={todo?.text}
            isCompleted={todo?.isCompleted}
            setCompleted={(value) => setCompleted(todo?.id, value)}
            deleteTodo={() => deleteTodo(todo?.id)}
          />
        </li>
      ))}
    </ul>
  );
};
