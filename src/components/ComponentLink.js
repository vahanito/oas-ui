import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComponentLink = ({componentName, isArray}) => {
  return (
    <>
      {componentName && <Link to={'/components/' + componentName}>{componentName}{isArray ? '[]' : ''}</Link>}
      {componentName &&
       <Link to={'/components/' + componentName} target="_blank">
         <i className="pl-2 fa fa-external-link" aria-hidden="true"/>
       </Link>}
    </>
  );
};

ComponentLink.propTypes = {
  componentName: PropTypes.string,
  isArray: PropTypes.bool
};

export default ComponentLink;
