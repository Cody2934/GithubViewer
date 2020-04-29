import React from 'react';
import PropTypes from 'prop-types';

const UserSearch = ({ username, onUsernameChange }) => (
  <>
    <input type="username" value={username} onChange={onUsernameChange} />
  </>
);

UserSearch.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired
};

export default UserSearch;
