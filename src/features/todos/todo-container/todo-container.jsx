import styles from './todo-container.module.css';
import { useTodos } from '../context';
import { TodoEntry } from './todo-entry';
import { TodoList } from './todo-list';
import { StatusBar } from './todo-status-bar';

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
      <p className={styles.footerMessage}>(not yet) Drag and drop to reorder list</p>
    </>
  );
};
