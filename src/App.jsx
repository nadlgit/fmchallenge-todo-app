import { AppProviders } from './providers';
import { Dashboard } from './routes';

function App() {
  return (
    <AppProviders>
      <Dashboard />
    </AppProviders>
  );
}

export default App;
