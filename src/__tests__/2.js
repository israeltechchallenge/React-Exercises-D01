import React from 'react';
import { render } from "@testing-library/react";
import WithProps from '../exercises/2_WithProps';
import '@testing-library/jest-dom/extend-expect';

it('should have Hi {name}', () => {
  function test(name) {
    const { getByText } = render(<WithProps name={name} />);
    let element = getByText(`Hi ${name}`)  
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe('h1');
  }
  ['Shelly', 'John', 'Dani'].forEach(test);
})