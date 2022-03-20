import 'shared/styles/fonts.css';
import 'shared/styles/colors.css';
import styles from './app.module.css';
import { AppProviders } from './app-providers';
import { useTheme } from 'features/theme';
import { TodosPage } from 'pages/todos';
import { ChallengeAttribution } from 'features/misc';

export const App = () => (
  <AppProviders>
    <AppConsumer />
  </AppProviders>
);

const AppConsumer = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light' ? styles.applight : styles.appdark}>
      <TodosPage />
      <ChallengeAttribution />
    </div>
  );
};
