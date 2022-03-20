import styles from './theme-switch.module.css';
import IconMoon from './icon-moon.svg';
import IconSun from './icon-sun.svg';
import { useTheme } from 'features/theme';

const iconSwitchToDarkMode = { src: IconMoon, alt: 'Icon to switch to dark mode' };
const iconSwitchToLigntMode = { src: IconSun, alt: 'Icon to switch to light mode' };
export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleThemeIcon = theme === 'light' ? iconSwitchToDarkMode : iconSwitchToLigntMode;
  return (
    <img
      className={styles.img}
      src={toggleThemeIcon?.src}
      alt={toggleThemeIcon?.alt}
      onClick={() => toggleTheme()}
    />
  );
};
