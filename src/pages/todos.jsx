import { PageLayout } from 'features/layout';
import { TodoContainer } from 'features/todos';

export const TodosPage = () => {
  return (
    <PageLayout title="Todo">
      <TodoContainer />
    </PageLayout>
  );
};
