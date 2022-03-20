import { useContext } from 'react';
import { TodosContext } from './todos-provider';

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('useTodos() must be used within TodosContext');
  }
  return context;
};
