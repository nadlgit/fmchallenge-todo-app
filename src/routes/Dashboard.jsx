import { useState } from 'react';
import { todosFilterValues } from '../utils/config';
import { useTodos } from '../stores/todos';
import { TodoEntry } from '../components/TodoEntry';
import { TodosList } from '../components/TodosList';
import { TodosFilter } from '../components/TodosFilter';

export const Dashboard = () => {
  const { todos, addTodo, setCompleted, deleteTodo, deleteCompletedTodos } = useTodos();
  const [todoFilter, setTodoFilter] = useState(todosFilterValues.ALL);
  return (
    <>
      <h1>todo</h1>
      <TodoEntry addTodo={addTodo} />
      <TodosList
        todos={todos}
        setCompleted={setCompleted}
        deleteTodo={deleteTodo}
        filter={todoFilter}
      />
      <span className="todo__status">
        {todos.filter((item) => item.isCompleted !== true).length} item(s) left
      </span>
      <span className="todo__deletecomplete" onClick={deleteCompletedTodos}>
        Clear completed
      </span>
      <TodosFilter filter={todoFilter} setFilter={setTodoFilter} />
      <p>Drag and drop to reorder list</p>
    </>
  );
};
