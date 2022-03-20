import styles from './attribution.module.css';

// prettier-ignore
export const ChallengeAttribution = () => (
  <div className={styles.attribution}>
    {// eslint-disable-next-line react/jsx-no-target-blank
    }Challenge by <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Frontend Mentor</a>
    {// eslint-disable-next-line jsx-a11y/anchor-is-valid
    }. Coded by <a href="#">Nadine</a>.
  </div>
);
