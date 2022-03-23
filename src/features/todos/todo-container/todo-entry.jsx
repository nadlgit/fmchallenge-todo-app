import styles from './todo-entry.module.css';
import { TodoItem } from '../todo-item';

export const TodoEntry = ({ addTodo = (text) => {} }) => (
  <div className={styles.entry}>
    <TodoItem isInput={true} addTodo={addTodo} />
  </div>
);
