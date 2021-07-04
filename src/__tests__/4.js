import React from 'react';
import NestedComp from '../exercises/4_NestedComp';
import CompanyAddress from '../exercises/4_NestedComp/CompanyAddress';
import NameDisplay from '../exercises/4_NestedComp/NameDisplay';
import { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('NameDisplay should have h1 with companyName and symbol', () => {
  const { getByText } = render(<NameDisplay companyName="a" symbol="b" />);
  expect(getByText("a (b)").tagName.toLowerCase()).toBe("h1");
});

it('CompanyAddress should have h4 with Address: {address}', () => {
  const { getByText } = render(<CompanyAddress address="a" />);
  expect(getByText("Address: a").tagName.toLowerCase()).toBe("h4");
});

it('should have nested components', () => {
  const wrapper = shallow(<NestedComp />);
  const elements = wrapper.getElements();
  expect(elements.length).toBe(1);
  expect(elements[0].type).toBe('div');
  expect(wrapper.find(CompanyAddress).length).toBe(1);
  expect(wrapper.find(NameDisplay).length).toBe(1);

  const { getByText } = render(<NestedComp
    companyName="myComp"
    address="somewhere"
    symbol="mc"
  />);

  expect(getByText("myComp (mc)").tagName.toLowerCase()).toBe("h1");
  expect(getByText("Address: somewhere").tagName.toLowerCase()).toBe("h4");
});