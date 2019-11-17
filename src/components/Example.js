import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Example = (props) => {
  return <ReactJson name={props.name} collapsed={true} src={props.example}/>;
};

Example.propTypes = {
  example: PropTypes.any,
  name: PropTypes.string
};

export default Example;
