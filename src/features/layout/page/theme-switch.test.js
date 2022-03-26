import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeSwitch } from './theme-switch';
import { useTheme } from 'features/theme';

jest.mock('features/theme');

test('ThemeSwitch', () => {
  let theme, setTheme;
  const setThemeCalls = jest.fn();
  useTheme.mockImplementation(() => {
    const state = React.useState('dark');
    theme = state[0];
    setTheme = (value) => {
      state[1](value);
      setThemeCalls(value);
    };
    return { theme, setTheme };
  });

  render(<ThemeSwitch />);
  const switchEl = screen.queryByRole('button');
  expect(switchEl).toBeInTheDocument();

  userEvent.click(switchEl);
  expect(setThemeCalls).toHaveBeenLastCalledWith('light');
  userEvent.click(switchEl);
  expect(setThemeCalls).toHaveBeenLastCalledWith('dark');
  expect(setThemeCalls).toHaveBeenCalledTimes(2);
});
