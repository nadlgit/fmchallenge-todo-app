import styles from './theme-switch.module.css';
import IconMoon from './icon-moon.svg';
import IconSun from './icon-sun.svg';
import { useTheme } from 'features/theme';
import { Actionnable } from 'shared/ui';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Actionnable
      className={styles.action}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <img
        src={theme === 'light' ? IconMoon : IconSun}
        alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      />
    </Actionnable>
  );
};
