import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout.tsx'

describe('Layout', () => {
  test('should renders header', () => {
    render(
      <BrowserRouter>
        <Layout children={<h1>hi</h1>}/>
      </BrowserRouter>
    )
    const headerElement = screen.getByText(/React Map App/i)
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent('React Map App')
  })
});
