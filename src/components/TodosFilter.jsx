import { todosFilterValues } from '../utils/config';

export const TodosFilter = ({ filter = todosFilterValues.ALL, setFilter = () => {} }) => {
  const filterElements = [
    { label: 'All', filterValue: todosFilterValues.ALL },
    { label: 'Active', filterValue: todosFilterValues.ACTIVE },
    { label: 'Completed', filterValue: todosFilterValues.COMPLETED },
  ];
  const handleChange = (e) => {
    setFilter(filterElements.find((item) => item.label === e.target.value).filterValue);
  };
  return (
    <div className="todos__filter">
      {filterElements.map((item, key) => (
        <label key={key}>
          <input
            className="todo__checkbox"
            name="radio"
            type="radio"
            value={item.label}
            checked={filter === item.filterValue}
            onChange={handleChange}
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};
