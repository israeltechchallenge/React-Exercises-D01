import React from 'react';
import { render } from "@testing-library/react";
import HelloWorld from '../exercises/1_HelloWorld';

it('should have hello world', () => {
  const { getByText } = render(<HelloWorld />);
  expect(getByText('Hello World')).toBeInTheDocument();
})