import { createContext, useReducer, useState } from 'react';
import { todosReducer } from './todos-reducer';
import { starterTodos } from './starter-todos';

export const TodosContext = createContext();

export const TodosProvider = ({ children, initialTodos = starterTodos }) => {
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos);
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

// NB: If needed for performance we could add memoization
// const addTodo = useCallback((text) => {
//   dispatchTodos({ type: 'ADD', payload: { text } });
// }, []);
// const setTodoCompletedValue = useCallback((id, value) => {
//   dispatchTodos({
//     type: 'UPDATE',
//     payload: { id, isCompleted: value },
//   });
// }, []);
// const deleteTodo = useCallback((id) => {
//   dispatchTodos({ type: 'DELETE', payload: { id } });
// }, []);
// const deleteCompletedTodos = useCallback(() => {
//   dispatchTodos({ type: 'DELETE_COMPLETED' });
// }, []);
// const value = useMemo(
//   () => ({
//     todos,
//     completedFilter,
//     setCompletedFilter,
//     addTodo,
//     setTodoCompletedValue,
//     deleteTodo,
//     deleteCompletedTodos,
//   }),
//   [todos, completedFilter, addTodo, setTodoCompletedValue, deleteTodo, deleteCompletedTodos]
// );
// return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;

// Another alternative for performance issues: separate state and state updater
// const TodosStateContext = createContext();
// const TodosUpdaterContext = createContext();
// const TodosProvider = ({ children }) => {
//   const [todos, dispatchTodos] = useReducer(todosReducer, starterTodos);
//   const [completedFilter, setCompletedFilter] = useState(null);
//   const addTodo = useCallback((text) => {
//     dispatchTodos({ type: 'ADD', payload: { text } });
//   }, []);
//   const setTodoCompletedValue = useCallback((id, value) => {
//     dispatchTodos({
//       type: 'UPDATE',
//       payload: { id, isCompleted: value },
//     });
//   }, []);
//   const deleteTodo = useCallback((id) => {
//     dispatchTodos({ type: 'DELETE', payload: { id } });
//   }, []);
//   const deleteCompletedTodos = useCallback(() => {
//     dispatchTodos({ type: 'DELETE_COMPLETED' });
//   }, []);
//   return (
//     <TodosStateContext.Provider
//       value={{
//         todos,
//         completedFilter,
//       }}
//     >
//       <TodosUpdaterContext.Provider
//         value={{
//           setCompletedFilter,
//           addTodo,
//           setTodoCompletedValue,
//           deleteTodo,
//           deleteCompletedTodos,
//         }}
//       >
//         {children}
//       </TodosUpdaterContext.Provider>
//     </TodosStateContext.Provider>
//   );
// };
// const useTodosState = () => {
//   //TodosStateContext
// };
// const useTodosUpdater = () => {
//   //TodosUpdaterContext
// };
