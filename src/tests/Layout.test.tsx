import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout.tsx'
import {vitest} from "vitest";

describe('Layout', () => {
  test('should renders header', () => {
    const mockToggleTheme = vitest.fn()
    const mockTheme = vitest.fn()

    render(
      <BrowserRouter>
        <Layout theme={mockTheme} toggleTheme={mockToggleTheme} >
          <h1>hi</h1>
        </Layout>
      </BrowserRouter>
    )
    const headerElement = screen.getByText(/React Map App/i)
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent('React Map App')
  })
});
