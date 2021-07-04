import React from 'react';
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import CompWithState from '../exercises/5_CompWithState';
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should increase when clicked', () => {
  const wrapper = shallow(<CompWithState />);
  expect(wrapper.state()).toEqual({ count: 0 });
  const { getByText } = render(<CompWithState />);
  expect(getByText('Count: 0').tagName.toLowerCase()).toBe('h1');
  const button = getByText('+1');
  expect(button.tagName.toLowerCase()).toBe('button');
  button.click();
  expect(getByText('Count: 1').tagName.toLowerCase()).toBe('h1');
  button.click();
  expect(getByText('Count: 2').tagName.toLowerCase()).toBe('h1');

})