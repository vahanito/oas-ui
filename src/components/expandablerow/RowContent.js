import React from 'react';
import PropTypes from 'prop-types';

const RowContent = ({ children }) => (
  <>
    {children}
  </>
);

RowContent.propTypes = {
  children: PropTypes.any
};

export default RowContent;
