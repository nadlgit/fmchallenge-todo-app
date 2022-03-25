import styles from './filter-option.module.css';
import { getRandomHtmlId } from 'shared/utils/helpers';

export const FilterOption = ({
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
        className={styles.filter}
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
