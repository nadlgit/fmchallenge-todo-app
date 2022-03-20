import styles from './todo-container.module.css';
import { useTodos } from '../context';
import { TodoItem } from '../todo-item';
import { TodoFilter } from './todo-filter';

export const TodoContainer = () => {
  const {
    todos,
    completedFilter,
    addTodo,
    setTodoCompletedValue,
    deleteTodo,
    deleteCompletedTodos,
  } = useTodos();
  const filteredTodos =
    completedFilter === null ? todos : todos.filter((todo) => todo.isCompleted === completedFilter);
  const nbActiveTodos = todos.filter((todo) => todo.isCompleted !== true).length;
  return (
    <>
      <TodoEntry addTodo={addTodo} />
      <TodoList
        filteredTodos={filteredTodos}
        setTodoCompletedValue={setTodoCompletedValue}
        deleteTodo={deleteTodo}
      />
      <StatusBar nbActiveTodos={nbActiveTodos} deleteCompletedTodos={deleteCompletedTodos} />
    </>
  );
};

const TodoEntry = ({ addTodo }) => (
  <div className={styles.entry}>
    <TodoItem isInput={true} addTodo={addTodo} />
  </div>
);

const TodoList = ({ filteredTodos, setTodoCompletedValue, deleteTodo }) => (
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

const StatusBar = ({ nbActiveTodos, deleteCompletedTodos }) => {
  return (
    <div className={styles.statusbar}>
      <p className={styles.status}>{`${nbActiveTodos} item(s) left`}</p>
      <p className={styles.delcomplete} onClick={deleteCompletedTodos}>
        Clear completed
      </p>
      <TodoFilter />
    </div>
  );
};
