import React from 'react';
import PropTypes from 'prop-types';
import ExpandableRow from 'src/components/expandablerow/ExpandableRow';
import RowContent from 'src/components/expandablerow/RowContent';
import ExpandableContent from 'src/components/expandablerow/ExpandableContent';
import ComponentLink from 'src/components/ComponentLink';
import OasService from 'src/services/OasService';
import ComponentContent from './ComponentContent';

Parent.propTypes = {
  parentRef: PropTypes.string
};

function Parent(props) {
  const componentName = OasService.componentNameFromRef(props.parentRef);
  return (
    <div className="container-fluid box-shadow">
      <h4>Parent component</h4>
      <hr/>
      <table className="table table-sm">
        <thead>
        <tr>
          <th className="expander"/>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        <ExpandableRow
          content={
            <RowContent>
              <td><i className="fa fa-caret-down" aria-hidden="true"/></td>
              <td>
                <ComponentLink componentName={componentName}/>
              </td>
            </RowContent>
          }
          expandableContent={
            <ExpandableContent>
              <ComponentContent componentName={componentName}/>
            </ExpandableContent>
          }
        />
        </tbody>
      </table>
    </div>
  );
}

export default Parent;
