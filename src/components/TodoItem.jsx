import { TodoWrapper } from './TodoWrapper';
import { TextWithCheckbox } from './TextWithCheckbox';
import IconCross from '../assets/icon-cross.svg';

export const TodoItem = ({
  text = '',
  isCompleted = false,
  setCompleted = () => {},
  deleteTodo = () => {},
}) => {
  return (
    <TodoWrapper>
      <TextWithCheckbox
        text={text}
        checked={isCompleted}
        toggleChecked={() => setCompleted(!isCompleted)}
      />
      <span className="todo__delete" onClick={() => deleteTodo()}>
        <img src={IconCross} alt="Icon cross" />
      </span>
    </TodoWrapper>
  );
};
