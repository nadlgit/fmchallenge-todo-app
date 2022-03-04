import { useState } from 'react';

export const TextWithCheckbox = ({
  text = '',
  checked = false,
  readonly = false,
  toggleChecked = () => {},
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleChecked();
  };
  return (
    <label>
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={isChecked}
        disabled={readonly}
        onChange={handleChange}
      />
      {text}
    </label>
  );
};
