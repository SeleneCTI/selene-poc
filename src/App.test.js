import { render, screen } from '@testing-library/react';
import App from './App';
import'./fonts/josefine-sans/static/JosefineSans-Bold.ttf'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
