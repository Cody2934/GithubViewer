import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ username, followers, following, image, profileUrl }) => (
  <section>
    <h3>{username}</h3>
    <img src={image} />
    <p>Followers: {followers}</p>
    <p>following: {following}</p>
    <a href={profileUrl} target="_blank" rel="noopener noreferrer">Profile</a>
  </section>
);

Detail.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired
};

export default Detail;
