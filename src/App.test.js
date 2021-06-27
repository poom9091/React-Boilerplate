import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Boilderplate React/i);
  expect(linkElement).toBeInTheDocument();
});

// import { render, screen } from '@testing-library/react';
// import App from './App';
