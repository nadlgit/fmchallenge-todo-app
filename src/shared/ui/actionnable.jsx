import styles from './actionnable.module.css';

export const Actionnable = ({ ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${props.className ?? ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
