import styles from './todo-status-bar.module.css';
import { TodoFilter } from './todo-filter';
import { Actionnable } from 'shared/ui';

export const StatusBar = ({ nbActiveTodos, deleteCompletedTodos = () => {} }) => {
  return (
    <div className={styles.statusbar}>
      <p className={styles.status}>{`${nbActiveTodos} item(s) left`}</p>
      <Actionnable className={styles.delcomplete} onClick={() => deleteCompletedTodos()}>
        Clear completed
      </Actionnable>
      <TodoFilter />
    </div>
  );
};
