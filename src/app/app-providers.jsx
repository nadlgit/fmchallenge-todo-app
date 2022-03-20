import { ThemeProvider } from 'features/theme';
import { TodosProvider } from 'features/todos';

export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <TodosProvider>{children}</TodosProvider>
    </ThemeProvider>
  );
};
