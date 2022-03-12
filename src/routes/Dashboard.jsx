import './Dashboard.css';
import { useState } from 'react';
import { todosFilterValues } from '../utils/config';
import { useTodos } from '../stores/todos';
import { Header } from '../components/Header';
import { TodosList } from '../components/TodosList';
import { StatusBar } from '../components/StatusBar';

export const Dashboard = () => {
  const { todos, addTodo, setCompleted, deleteTodo, deleteCompletedTodos } = useTodos();
  const [todosFilter, setTodosFilter] = useState(todosFilterValues.ALL);
  const filteredTodos = todos.filter(
    (item) =>
      todosFilter === todosFilterValues.ALL ||
      (todosFilter === todosFilterValues.ACTIVE && item.isCompleted !== true) ||
      (todosFilter === todosFilterValues.COMPLETED && item.isCompleted === true)
  );
  return (
    <div className="todos__dashboard">
      <Header />
      <TodosList
        todos={filteredTodos}
        addTodo={addTodo}
        setCompleted={setCompleted}
        deleteTodo={deleteTodo}
      />
      <StatusBar
        nbActiveTodos={todos.filter((item) => item.isCompleted !== true).length}
        todosFilter={todosFilter}
        setTodosFilter={setTodosFilter}
        deleteCompletedTodos={deleteCompletedTodos}
      />
      <p className="footer__message">(not yet) Drag and drop to reorder list</p>
    </div>
  );
};
