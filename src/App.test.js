import { render, screen } from '@testing-library/react';
import App from './App';

test('render product list', () => {
  render(<App />)
  const element = screen.getByTestId('product-list')
  expect(element).toBeInTheDocument()
}); 

test('render only products in the <smartphone> category', () => {
  render(<App />)
  const element = screen.getByTestId('product-list')
  expect(element.childNodes.length).toBe(5)
})
