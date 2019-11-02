import React from 'react';
import PropTypes from "prop-types";

RowContent.propTypes = {
  children: PropTypes.any
};

function RowContent(props) {
  return (
    <>
      {props.children}
    </>
  );
}

export default RowContent;
