import React from 'react';
import PropTypes from 'prop-types';

ExpandableRow.propTypes = {
  isExpanded: PropTypes.func,
  children: PropTypes.element
};


function ExpandableRow(props) {
  return (
    <>
      {props.isExpanded() &&
       <tr className={"box-shadow inner-component"}>
         <td colSpan="100%">
           {props.children}
         </td>
       </tr>}
    </>
  );
}

export default ExpandableRow;
