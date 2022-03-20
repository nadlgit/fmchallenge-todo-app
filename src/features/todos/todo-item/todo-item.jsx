import styles from './todo-item.module.css';
import { CheckBox } from './checkbox';
import { TextInput } from './text-input';
import IconCross from './icon-cross.svg';

export const TodoItem = ({
  isInput = false,
  isFiller = false,
  text = '',
  isCompleted = false,
  addTodo = (text) => {},
  setCompleted = (value) => {},
  deleteTodo = () => {},
}) => {
  return (
    <div className={`${styles.item} ${isInput ? styles.inputitem : ''}`}>
      <CheckBox
        label={isInput || isFiller ? '' : text}
        isChecked={isInput || isFiller ? false : isCompleted}
        isDisabled={isInput || isFiller}
        onCheckChange={isInput || isFiller ? undefined : setCompleted}
      />
      {isInput ? <TextInput onEnterKeyPress={addTodo} /> : null}
      {isInput || isFiller ? null : (
        <img
          src={IconCross}
          alt="Icon to delete item"
          className={styles.imgdelete}
          onClick={() => deleteTodo()}
        />
      )}
    </div>
  );
};