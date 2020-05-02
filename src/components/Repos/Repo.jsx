import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, url, language, description }) => (
  <section>
    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    {language && <p>{language}</p>}
    {description && <p>{description}</p>}
  </section>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string
};

export default Repo;
