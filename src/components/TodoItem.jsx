import './TodoItem.css';
import { useState } from 'react';
import { getRandomHtmlId } from '../utils/helpers';
import IconCross from '../assets/icon-cross.svg';

export const TodoItem = ({
  isInput = false,
  isFiller = false,
  isFirstListItem = false,
  text = '',
  isCompleted = false,
  addTodo = () => {},
  setCompleted = () => {},
  deleteTodo = () => {},
}) => {
  console.log(`render item "${text}"`);

  const [isChecked, setIsChecked] = useState(isCompleted);
  const handleCheckChange = (e) => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    setCompleted(newValue);
  };
  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value);
      e.target.value = '';
    }
  };
  const checkHtmlID = getRandomHtmlId('ck');
  return (
    <div
      className={`todo__item ${isInput ? 'todo__item--input' : ''} ${
        isFirstListItem ? 'todo__item--firstitem' : ''
      }`}
    >
      <input
        id={checkHtmlID}
        className="todo__checkbox"
        type="checkbox"
        checked={isInput || isFiller ? false : isChecked}
        disabled={isInput || isFiller}
        onChange={isInput || isFiller ? undefined : handleCheckChange}
      />
      <label htmlFor={checkHtmlID}>{isInput || isFiller ? '' : text}</label>
      {isInput ? (
        <input
          className="todo__input"
          type="text"
          onKeyPress={handleInputKeyPress}
          placeholder="Create a new todo..."
        />
      ) : null}
      {isInput || isFiller ? null : (
        <img
          src={IconCross}
          alt="Icon cross"
          className="todo__delete"
          onClick={() => deleteTodo()}
        />
      )}
    </div>
  );
};
