import React, { Component } from 'react';
import UserSearch from '../../components/UserSearch/UserSearch.js';
import UserDisplay from '../../components/UserDisplay/UserDisplay.js';

export default class UserViewer extends Component {
  state = {
    username: 'Cody',
    profilePic: 'this is a pic',
    profileLink: 'this is a link',
    repoLink: 'this is a link',
    followerCount: 20,
    followingCount: 20
  }
  render() {
    const { username, profilePic, profileLink, repoLink, followerCount, followingCount } = this.state;
    return (
      <>
        <UserSearch username={username}/>
        <UserDisplay username={username} profilePic={profilePic} profileLink={profileLink} repoLink={repoLink} followerCount={followerCount} followingCount={followingCount} />
      </>
    );
  }
} 
