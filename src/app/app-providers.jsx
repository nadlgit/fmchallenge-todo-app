import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'features/misc';
import { ThemeProvider } from 'features/theme';
import { TodosProvider } from 'features/todos';

export const AppProviders = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ThemeProvider>
      <TodosProvider>{children}</TodosProvider>
    </ThemeProvider>
  </ErrorBoundary>
);
