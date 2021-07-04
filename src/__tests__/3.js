import React from 'react';
import { render } from "@testing-library/react";
import ConditionalRendering from '../exercises/3_ConditionalRendering';
import '@testing-library/jest-dom/extend-expect';

it('should have "No number provided"', () => {
  const { getByText, queryByText } = render(<ConditionalRendering />);
  let element = getByText('No number provided');
  expect(element).toBeInTheDocument();
  expect(element.tagName.toLowerCase()).toBe('span');
  expect(queryByText('Your number is bigger than 10')).toBeNull();
  expect(queryByText('Your number is less than 10')).toBeNull();
});

it('should have "Your number is bigger than 10"', () => {
  const { getByText, queryByText } = render(<ConditionalRendering number={11} />);
  let element = getByText('Your number is bigger than 10');
  expect(element).toBeInTheDocument();
  expect(element.tagName.toLowerCase()).toBe('h1');
  expect(queryByText('No number provided')).toBeNull();
  expect(queryByText('Your number is less than 10')).toBeNull();
});

it('should have "Your number is less than 10"', () => {
  const { getByText, queryByText } = render(<ConditionalRendering number={0} />);
  let element = getByText('Your number is less than 10');
  expect(element).toBeInTheDocument();
  expect(element.tagName.toLowerCase()).toBe('p');
  expect(queryByText('No number provided')).toBeNull();
  expect(queryByText('Your number is bigger than 10')).toBeNull();
});