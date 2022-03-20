import { createContext, useReducer, useState } from 'react';
import { todosReducer } from './todos-reducer';
import { starterTodos } from './starter-todos';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, dispatchTodos] = useReducer(todosReducer, starterTodos);
  const [completedFilter, setCompletedFilter] = useState(null);

  const addTodo = (text) => {
    dispatchTodos({ type: 'ADD', payload: { text } });
  };
  const setTodoCompletedValue = (id, value) => {
    dispatchTodos({
      type: 'UPDATE',
      payload: { id, isCompleted: value },
    });
  };
  const deleteTodo = (id) => {
    dispatchTodos({ type: 'DELETE', payload: { id } });
  };
  const deleteCompletedTodos = () => {
    dispatchTodos({ type: 'DELETE_COMPLETED' });
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        completedFilter,
        setCompletedFilter,
        addTodo,
        setTodoCompletedValue,
        deleteTodo,
        deleteCompletedTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
