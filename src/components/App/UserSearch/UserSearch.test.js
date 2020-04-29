import React from 'react';
import { shallow } from 'enzyme';
import UserSearch from './UserSearch';

describe('UserSearch', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserSearch 
      username="Cody"
      onUsernameChange={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
