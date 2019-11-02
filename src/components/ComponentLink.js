import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

ComponentLink.propTypes = {
  componentName: PropTypes.string,
  isArray: PropTypes.bool
};

function ComponentLink(props) {
  const componentName = props.componentName;
  return (
    <>
      {componentName && <Link to={'/components/' + componentName}>{componentName}{props.isArray ? '[]' : ''}</Link>}
      {componentName &&
       <Link to={'/components/' + componentName} target="_blank">
         <i className="pl-2 fa fa-external-link" aria-hidden="true"/>
       </Link>}
    </>
  );
}

export default ComponentLink;