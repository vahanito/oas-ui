import React from 'react';
import PropTypes from "prop-types";

NotFound.propTypes = {
  component: PropTypes.string,
  resource: PropTypes.string
};

export default function NotFound(props) {
  if (props.component) {
    return <h3>Component {props.component} not found</h3>;
  } else if (props.resource) {
    return <h3>Resource {props.component} not found</h3>;
  }
  return <h3>Pick an item from menu dropdown</h3>;
}
