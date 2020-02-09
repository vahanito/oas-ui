import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandableRow = ({content, expandableContent, disabledExpansion}) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      {React.Children.map(content || null, (child, i) => {
        return (
          <tr onClick={() => setExpanded(!isExpanded)}>
            <td>
              {!disabledExpansion && isExpanded && <i className="fa fa-caret-down" aria-hidden="true"/>}
              {!disabledExpansion && !isExpanded && <i className="fa fa-caret-right" aria-hidden="true"/>}
            </td>
            <child.type {...child.props} key={i}/>
          </tr>
        );
      })}
      {!isExpansionDisabled(disabledExpansion) && React.Children.map(expandableContent || null, (child, i) => {
        return <child.type isExpanded={isExpanded} {...child.props} key={i}/>;
      })}
    </>
  );
};

const isExpansionDisabled = (disabledExpansion) => {
  return disabledExpansion === true;
};

ExpandableRow.propTypes = {
  content: PropTypes.any,
  expandableContent: PropTypes.any,
  disabledExpansion: PropTypes.bool
};

export default ExpandableRow;
