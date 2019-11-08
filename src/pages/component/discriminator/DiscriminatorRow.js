import React from 'react';
import PropTypes from 'prop-types';
import ComponentContent from '../ComponentContent';
import ComponentLink from 'src/components/ComponentLink';
import ExpandableRow from 'src/components/expandablerow/ExpandableRow';
import RowContent from 'src/components/expandablerow/RowContent';
import ExpandableContent from 'src/components/expandablerow/ExpandableContent';

DiscriminatorRow.propTypes = {
  value: PropTypes.string,
  componentName: PropTypes.string
};

function DiscriminatorRow(props) {
  return (
    <ExpandableRow
      content={
        <RowContent>
          <td>
            <i className="fa fa-caret-down" aria-hidden="true"/>
          </td>
          <td>{props.value}</td>
          <td><ComponentLink componentName={props.componentName}/></td>
        </RowContent>
      }
      expandableContent={
        <ExpandableContent>
          <ComponentContent componentName={props.componentName}/>
        </ExpandableContent>
      }
    />
  );
}

export default DiscriminatorRow;
