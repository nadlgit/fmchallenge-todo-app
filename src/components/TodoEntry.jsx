import { TodoWrapper } from './TodoWrapper';
import { TextWithCheckbox } from './TextWithCheckbox';

export const TodoEntry = ({ addTodo = () => {} }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value);
      e.target.value = '';
    }
  };
  return (
    <TodoWrapper>
      <TextWithCheckbox checked={false} readonly={true} />
      <input className="todo__entry" type="text" onKeyPress={handleKeyPress} />
    </TodoWrapper>
  );
};
