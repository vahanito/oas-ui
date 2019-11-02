import React from 'react';
import PropTypes from "prop-types";

ExpandableContent.propTypes = {
  children: PropTypes.element,
  isExpanded: PropTypes.func
};

function ExpandableContent(props) {
  return (
    <>
      {props.isExpanded() && <tr className={"box-shadow inner-component"}>
        <td colSpan="100%">
          {props.children}
        </td>
      </tr>}
    </>
  );
}

export default ExpandableContent;
