import styles from './todo-entry.module.css';
import { useTodos } from '../context';
import { TodoItem } from '../todo-item';

export const TodoEntry = () => {
  const { addTodo } = useTodos();
  return (
    <div className={styles.entry}>
      <TodoItem isInput={true} addTodo={addTodo} />
    </div>
  );
};
