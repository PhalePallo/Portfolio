import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders App without crashing', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Example: Check if Navbar or home component loads
  const homeText = screen.getByText(/Home/i);
  expect(homeText).toBeInTheDocument();
});
