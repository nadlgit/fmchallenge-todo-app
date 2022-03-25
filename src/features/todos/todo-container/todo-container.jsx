import { TodoEntry } from '../todo-entry';
import { TodoList } from '../todo-list';
import { DragNDropDirectives } from '../todo-dragndrop-directives';

export const TodoContainer = () => (
  <>
    <TodoEntry />
    <TodoList />
    <DragNDropDirectives />
  </>
);
