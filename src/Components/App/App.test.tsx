import React from 'react';
import { shallow } from 'enzyme';
import App from './App';



describe('App', () => {
  it('should have one < div />', () => {
    const container = shallow(<App />);
    expect(container.find('div').length).toEqual(1);
  });
});