import styles from './text-input.module.css';

export const TextInput = ({
  placeHolder = 'Create a new todo...',
  onEnterKeyPress = (text) => {},
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnterKeyPress(e.target.value);
      e.target.value = '';
    }
  };
  return (
    <input
      className={styles.input}
      type="text"
      onKeyPress={handleKeyPress}
      placeholder={placeHolder}
    />
  );
};
