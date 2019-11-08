import React from 'react';
import PropTypes from 'prop-types';

const ExpandableContent = ({ children, isExpanded }) => (
  <>
    {isExpanded && <tr className="box-shadow inner-component">
      <td colSpan="100%">
        {children}
      </td>
    </tr>}
  </>
);

ExpandableContent.propTypes = {
  children: PropTypes.element.isRequired,
  isExpanded: PropTypes.bool.isRequired
};

export default ExpandableContent;
