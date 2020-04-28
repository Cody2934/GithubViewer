import React from 'react';
import UserDisplay from './UserDisplay/UserDisplay';

export default function App() {
  return <UserDisplay
    username="Cody"
    profilePic="this is a pic" 
    profileLink="this is a link" 
    repoLink="this is also a link" 
    followerCount="20"
    followingCount="30" />;
}
  
