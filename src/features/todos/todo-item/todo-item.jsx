import styles from './todo-item.module.css';
import { CheckBox } from './checkbox';
import { TextInput } from './text-input';
import { Actionnable } from 'shared/ui';
import IconCross from './icon-cross.svg';

export const TodoItem = ({
  isInput = false,
  isFiller = false,
  text = '',
  isCompleted = false,
  addTodo = (text) => {},
  setCompleted = (value) => {},
  deleteTodo = () => {},
}) => (
  <div className={`${styles.item} ${isInput ? styles.inputitem : ''}`}>
    <CheckBox
      label={isInput || isFiller ? '' : text}
      isChecked={isInput || isFiller ? false : isCompleted}
      isDisabled={isInput || isFiller}
      onCheckChange={isInput || isFiller ? undefined : setCompleted}
    />

    {isInput && <TextInput onEnterKeyPress={addTodo} />}

    {!isInput && !isFiller && (
      <Actionnable className={styles.delete} onClick={() => deleteTodo()}>
        <img src={IconCross} alt="Delete todo item" />
      </Actionnable>
    )}
  </div>
);
