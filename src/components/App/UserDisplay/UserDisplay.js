import React from 'react';
import PropTypes from 'prop-types';

const UserDisplay = ({ username, profilePic, profileLink, repoLink, followerCount, followingCount }) => (
  <div>
    {username}
    {profilePic}
    {profileLink}
    {repoLink}
    {followerCount}
    {followingCount}
  </div>
);

UserDisplay.propTypes = {
  username: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired
};

export default UserDisplay;
