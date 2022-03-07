import './StatusBar.css';
import React from 'react';
import { todosFilterValues } from '../utils/config';
import { getRandomHtmlId } from '../utils/helpers';

export const StatusBar = ({
  nbActiveTodos,
  todosFilter = todosFilterValues.ALL,
  setTodosFilter = () => {},
  deleteCompletedTodos = () => {},
}) => {
  const filterElements = [
    { label: 'All', filterValue: todosFilterValues.ALL },
    { label: 'Active', filterValue: todosFilterValues.ACTIVE },
    { label: 'Completed', filterValue: todosFilterValues.COMPLETED },
  ];
  const handleFilterChange = (e) => {
    setTodosFilter(filterElements.find((item) => item.label === e.target.value).filterValue);
  };
  const filterBaseHtmlID = getRandomHtmlId('fl');
  return (
    <div className="todos__statusbar">
      <p className="todos__status">{`${nbActiveTodos} item(s) left`}</p>
      <p className="todos__actions" onClick={deleteCompletedTodos}>
        Clear completed
      </p>
      <div className="todos__filter">
        {filterElements.map((item, arrkey) => (
          <React.Fragment key={arrkey}>
            <input
              id={`${filterBaseHtmlID}${arrkey}`}
              name="todosfilter"
              type="radio"
              value={item.label}
              checked={todosFilter === item.filterValue}
              onChange={handleFilterChange}
            />
            <label htmlFor={`${filterBaseHtmlID}${arrkey}`}>{item.label}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
