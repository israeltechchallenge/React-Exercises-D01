import React from 'react';
import { render } from "@testing-library/react";
import ListOfProducts from '../exercises/6_ListOfProducts';
import '@testing-library/jest-dom/extend-expect';

it('should have three products', () => {
  const products = [
    { id: '1', name: 'a', price: 12 },
    { id: '2', name: 'b', price: 14 },
    { id: '3', name: 'c' }
  ]
  const { getByText, container } = render(<ListOfProducts products={products} />);
  expect(container.querySelectorAll('li').length).toBe(products.length);
  products.forEach(product => {
    if (product.price) {
      const li = getByText(`${product.name} ${product.price}`);
      expect(li).toBeDefined();
      expect(li.tagName.toLowerCase()).toBe('li');
    } else {
      const li = getByText(`${product.name} N/A`);
      expect(li).toBeDefined();
      expect(li.tagName.toLowerCase()).toBe('li');
    }
  })
});


it('should have random number product', () => {
  const products = Array(Math.floor(Math.random() * 100))
    .fill(1)
    .map((number, index) => ({ id: index + '', name: index + ' product', price: number }));
  const { getByText, container } = render(<ListOfProducts products={products} />);
  expect(container.querySelectorAll('li').length).toBe(products.length);
  products.forEach(product => {
    if (product.price) {
      const li = getByText(`${product.name} ${product.price}`);
      expect(li).toBeDefined();
      expect(li.tagName.toLowerCase()).toBe('li');
    } else {
      const li = getByText(`${product.name} N/A`);
      expect(li).toBeDefined();
      expect(li.tagName.toLowerCase()).toBe('li');
    }
  })
});