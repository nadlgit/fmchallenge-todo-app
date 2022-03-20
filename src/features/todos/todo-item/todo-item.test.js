import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from '@faker-js/faker';
import { TodoItem } from './todo-item';

const getCheckboxEl = () => screen.queryByRole('checkbox');
const getInputEl = () => screen.queryByRole('textbox');
const getTextEl = (text) => screen.queryByText(text);
const getDeleteImgEl = () => screen.queryByRole('img', { name: /.*cross.*/i });

test('TodoItem behavior when props isInput', () => {
  const testProps = {
    isInput: true,
    text: faker.lorem.words(),
    isCompleted: true,
    addTodo: jest.fn(),
  };
  render(<TodoItem {...testProps} />);

  const checkboxEl = getCheckboxEl();
  expect(checkboxEl).toBeInTheDocument();
  expect(checkboxEl).not.toBeChecked();
  expect(checkboxEl).toBeDisabled();

  const inputEl = getInputEl();
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveValue('');

  const textEl = getTextEl(testProps.text);
  expect(textEl).not.toBeInTheDocument();

  const deleteImgEl = getDeleteImgEl();
  expect(deleteImgEl).not.toBeInTheDocument();

  const fakeInput = faker.lorem.words();
  userEvent.type(inputEl, `${fakeInput}{enter}`);
  expect(testProps.addTodo).toHaveBeenCalledWith(fakeInput);
  expect(inputEl).toHaveValue('');
});

test('TodoItem behavior when props isFiller', () => {
  const testProps = {
    isFiller: true,
    text: faker.lorem.words(),
    isCompleted: true,
  };
  render(<TodoItem {...testProps} />);

  const checkboxEl = getCheckboxEl();
  expect(checkboxEl).toBeInTheDocument();
  expect(checkboxEl).not.toBeChecked();
  expect(checkboxEl).toBeDisabled();

  const inputEl = getInputEl();
  expect(inputEl).not.toBeInTheDocument();

  const textEl = getTextEl(testProps.text);
  expect(textEl).not.toBeInTheDocument();

  const deleteImgEl = getDeleteImgEl();
  expect(deleteImgEl).not.toBeInTheDocument();
});

test('TodoItem behavior when regular item (no props isInput or isFiller)', () => {
  const testProps = {
    text: faker.lorem.words(),
    isCompleted: true,
    setCompleted: jest.fn(),
    deleteTodo: jest.fn(),
  };
  render(<TodoItem {...testProps} />);

  const checkboxEl = getCheckboxEl();
  expect(checkboxEl).toBeInTheDocument();
  expect(checkboxEl).toBeChecked();
  expect(checkboxEl).not.toBeDisabled();

  const inputEl = getInputEl();
  expect(inputEl).not.toBeInTheDocument();

  const textEl = getTextEl(testProps.text);
  expect(textEl).toBeInTheDocument();

  const deleteImgEl = getDeleteImgEl();
  expect(deleteImgEl).toBeInTheDocument();

  userEvent.click(textEl);
  expect(checkboxEl).not.toBeChecked();
  expect(testProps.setCompleted).toHaveBeenCalledWith(false);
  userEvent.click(textEl);
  expect(checkboxEl).toBeChecked();
  expect(testProps.setCompleted).toHaveBeenCalledWith(true);

  userEvent.click(deleteImgEl);
  expect(testProps.deleteTodo).toHaveBeenCalled();
});
