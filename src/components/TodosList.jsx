import { TodoItem } from '../components/TodoItem';

export const TodosList = ({
  todos = [],
  addTodo = () => {},
  setCompleted = () => {},
  deleteTodo = () => {},
}) => {
  console.log('render list');

  return (
    <>
      <TodoItem isInput={true} addTodo={addTodo} />
      {todos.length === 0 ? (
        <TodoItem isFiller={true} isFirstListItem={true} />
      ) : (
        todos.map((todo, arrkey) => (
          <TodoItem
            key={todo?.id}
            isFirstListItem={arrkey === 0}
            text={todo?.text}
            isCompleted={todo?.isCompleted}
            setCompleted={(value) => setCompleted(todo?.id, value)}
            deleteTodo={() => deleteTodo(todo?.id)}
          />
        ))
      )}
    </>
  );
};
