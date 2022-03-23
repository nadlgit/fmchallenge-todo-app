import styles from './todo-list.module.css';
import { TodoItem } from '../todo-item';

export const TodoList = ({
  filteredTodos = [],
  setTodoCompletedValue = (id, value) => {},
  deleteTodo = (id) => {},
}) => (
  <div className={styles.list}>
    {filteredTodos.length === 0 ? (
      <TodoItem isFiller={true} />
    ) : (
      filteredTodos.map((todo) => (
        <TodoItem
          key={todo?.id}
          text={todo?.text}
          isCompleted={todo?.isCompleted}
          setCompleted={(value) => setTodoCompletedValue(todo?.id, value)}
          deleteTodo={() => deleteTodo(todo?.id)}
        />
      ))
    )}
  </div>
);
