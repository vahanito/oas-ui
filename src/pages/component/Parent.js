import React from 'react';
import PropTypes from 'prop-types';
import ExpandableRow from '../../components/expandablerow/ExpandableRow';
import ExpandableContent from '../../components/expandablerow/ExpandableContent';
import ComponentLink from '../../components/ComponentLink';
import OasService from '../../services/OasService';
import ComponentContent from './ComponentContent';

const Parent = ({parentRef}) => {
  const componentName = OasService.componentNameFromRef(parentRef);
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
            <td>
              <ComponentLink componentName={componentName}/>
            </td>
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
};

Parent.propTypes = {
  parentRef: PropTypes.string
};

export default Parent;
