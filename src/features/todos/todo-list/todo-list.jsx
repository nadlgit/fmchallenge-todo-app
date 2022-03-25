import styles from './todo-list.module.css';
import { useTodos } from '../context';
import { TodoItem } from '../todo-item';
import { Actionnable } from 'shared/ui';
import { FilterOption } from './filter-option';

export const TodoList = () => {
  const {
    todos,
    completedFilter,
    setCompletedFilter,
    setTodoCompletedValue,
    deleteTodo,
    deleteCompletedTodos,
  } = useTodos();

  const filteredTodos =
    completedFilter === null ? todos : todos.filter((todo) => todo.isCompleted === completedFilter);

  const nbActiveTodos = todos.filter((todo) => todo.isCompleted !== true).length;

  return (
    <div className={styles.grid}>
      <div className={styles.list}>
        {filteredTodos.length === 0 ? (
          <TodoItem isFiller={true} />
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo?.id}
              text={todo?.text}
              isCompleted={todo?.isCompleted}
              setCompleted={(value) => setTodoCompletedValue(todo?.id, value)}
              deleteTodo={() => deleteTodo(todo?.id)}
            />
          ))
        )}
      </div>

      <p className={styles.count}>{`${nbActiveTodos} item(s) left`}</p>

      <div className={styles.filter}>
        <FilterOption
          label="All"
          filterValue={null}
          currentFilter={completedFilter}
          onFilterChange={setCompletedFilter}
        />
        <FilterOption
          label="Active"
          filterValue={false}
          currentFilter={completedFilter}
          onFilterChange={setCompletedFilter}
        />
        <FilterOption
          label="Completed"
          filterValue={true}
          currentFilter={completedFilter}
          onFilterChange={setCompletedFilter}
        />
      </div>

      <Actionnable className={styles.delcomplete} onClick={() => deleteCompletedTodos()}>
        Clear completed
      </Actionnable>
    </div>
  );
};
