import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('dice renders a number', () => {
    const { getByText } = render(<Dice value="6" />);
    const value = getByText("6");
    expect(value).toBeInTheDocument();
});


