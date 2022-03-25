import styles from './page.module.css';
import { ThemeSwitch } from './theme-switch';

export const PageLayout = ({ title, children }) => (
  <div className={styles.container}>
    <h1>
      {title}
      <ThemeSwitch />
    </h1>
    <main>{children}</main>
  </div>
);
