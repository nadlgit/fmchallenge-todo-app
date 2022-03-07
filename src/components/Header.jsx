import './Header.css';
import { useTheme } from '../providers';
import IconMoon from '../assets/icon-moon.svg';
import IconSun from '../assets/icon-sun.svg';

export const Header = () => {
  const { isLightMode, toggleTheme } = useTheme();
  const toggleThemeIcon = isLightMode ? IconMoon : IconSun;
  return (
    <h1 className="todos__header">
      Todo
      <img
        src={toggleThemeIcon}
        alt="Icon toggle dark or light mode"
        onClick={() => toggleTheme()}
      />
    </h1>
  );
};
