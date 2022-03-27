import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from '@faker-js/faker';
import { TodoContainer } from './todo-container';
import { TodosProvider } from 'features/todos';

describe('TodoContainer', () => {
  const initialTodos = [
    { id: 1, text: faker.lorem.words(), isCompleted: true },
    { id: 2, text: faker.lorem.words(), isCompleted: false },
    { id: 3, text: faker.lorem.words(), isCompleted: false },
    { id: 4, text: faker.lorem.words(), isCompleted: true },
    { id: 5, text: faker.lorem.words(), isCompleted: false },
  ];
  const TodosWrapper = ({ children }) => (
    <TodosProvider initialTodos={initialTodos}>{children}</TodosProvider>
  );

  test('initial display', () => {
    render(<TodoContainer />, { wrapper: TodosWrapper });

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    initialTodos.forEach((todo) =>
      expect(
        screen.getByRole('checkbox', { name: todo.text, checked: todo.isCompleted })
      ).toBeInTheDocument()
    );
    expect(screen.getAllByRole('button', { name: /delete/i }).length).toEqual(initialTodos.length);

    const nbActive = initialTodos.filter((todo) => todo.isCompleted !== true).length;
    expect(
      screen.getByText((content, element) => content.includes(`${nbActive} item`))
    ).toBeInTheDocument();

    expect(screen.getByRole('radio', { name: /all/i, checked: true })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /active/i, checked: false })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /completed/i, checked: false })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /clear completed/i })).toBeInTheDocument();
  });

  test('complete and uncomplete todo', () => {
    render(<TodoContainer />, { wrapper: TodosWrapper });
    const todoIndex = 0;
    const todoEl = screen.getByRole('checkbox', { name: initialTodos[todoIndex].text });
    expect(todoEl).toBeChecked();
    userEvent.click(todoEl);
    expect(todoEl).not.toBeChecked();
    userEvent.click(todoEl);
    expect(todoEl).toBeChecked();
  });

  test('add todo', () => {
    render(<TodoContainer />, { wrapper: TodosWrapper });
    const fakeTodoText = faker.lorem.words();
    userEvent.type(screen.getByRole('textbox'), `${fakeTodoText}{enter}`);
    expect(
      screen.getByRole('checkbox', { name: fakeTodoText, checked: false })
    ).toBeInTheDocument();
  });

  test('delete todo', () => {
    render(<TodoContainer />, { wrapper: TodosWrapper });
    const todoIndex = 0;
    const todoEl = screen.queryByRole('checkbox', { name: initialTodos[todoIndex].text });
    expect(todoEl).toBeInTheDocument();
    userEvent.click(screen.getAllByRole('button', { name: /delete/i })[todoIndex]);
    expect(todoEl).not.toBeInTheDocument();
  });

  test('delete completed todos', () => {
    render(<TodoContainer />, { wrapper: TodosWrapper });
    userEvent.click(screen.getByRole('button', { name: /clear completed/i }));
    initialTodos
      .filter((todo) => todo.isCompleted === true)
      .forEach((todo) =>
        expect(screen.queryByRole('checkbox', { name: todo.text })).not.toBeInTheDocument()
      );
  });

  test('filter active', () => {
    render(<TodoContainer />, { wrapper: TodosWrapper });
    userEvent.click(screen.getByRole('radio', { name: /active/i }));
    initialTodos
      .filter((todo) => todo.isCompleted === true)
      .forEach((todo) =>
        expect(screen.queryByRole('checkbox', { name: todo.text })).not.toBeInTheDocument()
      );
    initialTodos
      .filter((todo) => todo.isCompleted !== true)
      .forEach((todo) =>
        expect(screen.getByRole('checkbox', { name: todo.text })).toBeInTheDocument()
      );
  });

  test('filter completed', () => {
    render(<TodoContainer />, { wrapper: TodosWrapper });
    userEvent.click(screen.getByRole('radio', { name: /completed/i }));
    initialTodos
      .filter((todo) => todo.isCompleted === true)
      .forEach((todo) =>
        expect(screen.getByRole('checkbox', { name: todo.text })).toBeInTheDocument()
      );
    initialTodos
      .filter((todo) => todo.isCompleted !== true)
      .forEach((todo) =>
        expect(screen.queryByRole('checkbox', { name: todo.text })).not.toBeInTheDocument()
      );
  });
});
