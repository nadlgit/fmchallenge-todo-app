import { todosFilterValues } from '../utils/config';
import { TodoItem } from '../components/TodoItem';

export const TodosList = ({
  todos = [],
  todosFilter = todosFilterValues.ALL,
  addTodo = () => {},
  setCompleted = () => {},
  deleteTodo = () => {},
}) => {
  const filteredTodos = todos.filter(
    (item) =>
      todosFilter === todosFilterValues.ALL ||
      (todosFilter === todosFilterValues.ACTIVE && item.isCompleted !== true) ||
      (todosFilter === todosFilterValues.COMPLETED && item.isCompleted === true)
  );
  return (
    <>
      <TodoItem isInput={true} addTodo={addTodo} />
      {filteredTodos.length === 0 ? (
        <TodoItem isFiller={true} isFirstListItem={true} />
      ) : (
        filteredTodos.map((todo, arrkey) => (
          <TodoItem
            key={todo?.id}
            isFirstListItem={arrkey === 0}
            text={todo?.text}
            isCompleted={todo?.isCompleted}
            setCompleted={(value) => setCompleted(todo?.id, value)}
            deleteTodo={() => deleteTodo(todo?.id)}
          />
        ))
      )}
    </>
  );
};
