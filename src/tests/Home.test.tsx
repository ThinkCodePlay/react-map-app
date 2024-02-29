// test that home page renders correctly
// Path: Home.test.tsx

import { render, screen } from '@testing-library/react';
import Home from '../pages/Home.tsx';

describe('Home', () => {
  test('should renders home page', () => {
    render(<Home />);
    const headerElement = screen.getByText(/React Map App/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('React Map App');
  });

  test('should start with 1 tab', () => {
    render(<Home/>);
    const tabElement = screen.getAllByRole('tab');
    expect(tabElement).toHaveLength(1);
  })
});
