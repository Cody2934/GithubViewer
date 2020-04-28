import React from 'react';
import { shallow } from 'enzyme';
import UserDisplay from './UserDisplay';

describe('UserDisplay', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserDisplay username="Cody"
      profilePic="this is a pic" 
      profileLink="this is a link" 
      repoLink="this is also a link" 
      followerCount={20}
      followingCount={30}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
