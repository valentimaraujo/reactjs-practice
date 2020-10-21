import React from 'react';
import Counter from './Counter';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter Testing', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('start with a count of 0', () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find('#title').text();
    expect(text).toEqual('Current count: 0');
  });

  it('can increment the count when the button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('#title').text();
    expect(text).toEqual('Current count: 1');
  });

  it('can decrement the count when the button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const decrementtBtn = wrapper.find('button.decrement');
    decrementtBtn.simulate('click');
    const text = wrapper.find('#title').text();
    expect(text).toEqual('Current count: -1');
  });
});
