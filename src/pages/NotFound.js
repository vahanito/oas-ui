import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({component, resource}) => {
  if (component) {
    return <h3>Component {component} not found</h3>;
  } else if (resource) {
    return <h3>Resource {resource} not found</h3>;
  }
  return <h3>Pick an item from menu dropdown</h3>;
};

NotFound.propTypes = {
  component: PropTypes.string,
  resource: PropTypes.string
};

export default NotFound;
