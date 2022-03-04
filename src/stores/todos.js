import { useReducer } from 'react';

const todosActionTypes = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  DELETE_COMPLETED_TODOS: 'DELETE_COMPLETED_TODOS',
};

const todosReducer = (todos, action) => {
  if (!Array.isArray(todos)) {
    throw new Error('Expecting an array of todos');
  }
  let newTodos = [...todos];
  const todoUpdate = action?.todo ?? {};
  switch (action?.type) {
    case todosActionTypes.ADD_TODO:
      todoUpdate.id = newTodos.reduce((prev, curr) => Math.max(prev, curr.id), 0) + 1;
      todoUpdate.text = todoUpdate?.text?.trim() ?? '';
      todoUpdate.isCompleted = false;
      if (todoUpdate.text.length > 0) {
        newTodos.push(todoUpdate);
      }
      break;
    case todosActionTypes.UPDATE_TODO:
      const todoFound = newTodos.find((todo) => todo.id === todoUpdate?.id);
      if (todoFound && todoUpdate?.isCompleted) {
        todoFound.isCompleted = todoUpdate?.isCompleted;
      }
      break;
    case todosActionTypes.DELETE_TODO:
      newTodos = newTodos.filter((todo) => todo.id !== todoUpdate?.id);
      break;
    case todosActionTypes.DELETE_COMPLETED_TODOS:
      newTodos = newTodos.filter((todo) => todo.isCompleted !== true);
      break;
    default:
      throw new Error('Unsupported todo action');
  }
  return newTodos;
};

export const useTodos = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, null, () => getTodos());
  const addTodo = (text) => {
    dispatchTodos({ type: todosActionTypes.ADD_TODO, todo: { text } });
  };
  const setCompleted = (id, value) => {
    dispatchTodos({ type: todosActionTypes.UPDATE_TODO, todo: { id, isCompleted: value } });
  };
  const deleteTodo = (id) => {
    dispatchTodos({ type: todosActionTypes.DELETE_TODO, todo: { id } });
  };
  const deleteCompletedTodos = () => {
    dispatchTodos({ type: todosActionTypes.DELETE_COMPLETED_TODOS });
  };
  return { todos, addTodo, setCompleted, deleteTodo, deleteCompletedTodos };
};

const getTodos = () => {
  /*
  TODO:
  - lire et renvoyer localStorage
  - si localStorage vide (mais vraiment null, pas présent avec 0 tâches), renvoyer les tâches d'exemple
  TODO2: en terme d'architecture, voir où mettre le code qui manipule le localStorage
  */
  const starterTodos = [
    { id: 1, text: 'Complete online javascript course', isCompleted: true },
    { id: 2, text: 'Jog around the park 3x', isCompleted: false },
    { id: 3, text: '10 minutes meditation', isCompleted: false },
    { id: 4, text: 'Read for 1 hour', isCompleted: false },
    { id: 5, text: 'Pick up groceries', isCompleted: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', isCompleted: false },
  ];
  return starterTodos;
};
