import styles from './checkbox.module.css';
import { useState } from 'react';
import { getRandomHtmlId } from 'shared/utils/helpers';

export const CheckBox = ({
  label = '',
  isChecked: checkedInitialValue = false,
  isDisabled = false,
  onCheckChange = (checked) => {},
}) => {
  const checkHtmlID = getRandomHtmlId('ck');
  const [isChecked, setIsChecked] = useState(checkedInitialValue);
  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    onCheckChange(newValue);
  };
  return (
    <>
      <input
        id={checkHtmlID}
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
      />
      <label htmlFor={checkHtmlID}>{label}</label>
    </>
  );
};
