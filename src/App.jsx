import './App.css';
import { AppProviders, useTheme } from './providers';
import { Dashboard } from './routes';

function App() {
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  );
}

const AppConsumer = () => {
  const { isLightMode } = useTheme();
  // prettier-ignore
  const challengeAtribution = (
    <div className="attribution">
      {// eslint-disable-next-line react/jsx-no-target-blank
      }Challenge by <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Frontend Mentor</a>
      {// eslint-disable-next-line jsx-a11y/anchor-is-valid
      }. Coded by <a href="#">Nadine</a>.
    </div>
  );
  return (
    <div className={`app ${isLightMode ? 'themelight' : ''}`}>
      <Dashboard />
      {challengeAtribution}
    </div>
  );
};

export default App;
