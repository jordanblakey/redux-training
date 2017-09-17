import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

function Main() {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
    </div>
  )
}

export default Main;
