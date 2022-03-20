import styles from './todo-filter.module.css';
import { useTodos } from '../context';
import { getRandomHtmlId } from 'shared/utils/helpers';

export const TodoFilter = () => {
  const { completedFilter, setCompletedFilter } = useTodos();
  return (
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
  );
};

const FilterOption = ({
  label = '',
  filterValue = null,
  currentFilter = null,
  onFilterChange = (value) => {},
}) => {
  const filterHtmlID = getRandomHtmlId('fl');
  const isCurrentFilter = filterValue === currentFilter;
  return (
    <>
      <input
        id={filterHtmlID}
        name="filter"
        type="radio"
        value={filterValue ?? ''}
        checked={isCurrentFilter}
        onChange={() => onFilterChange(filterValue)}
      />
      <label htmlFor={filterHtmlID}>{label}</label>
    </>
  );
};
