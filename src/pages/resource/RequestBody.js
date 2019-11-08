import React from 'react';
import PropTypes from 'prop-types';
import OasService from 'src/services/OasService';
import ComponentLink from 'src/components/ComponentLink';
import ExpandableRow from 'src/components/expandablerow/ExpandableRow';
import ExpandableContent from 'src/components/expandablerow/ExpandableContent';
import RowContent from 'src/components/expandablerow/RowContent';
import ComponentContent from 'src/pages/component/ComponentContent';

const RequestBody = (props) => {
  const requestBody = props.requestBody;
  const contentType = Object.keys(requestBody.content)[0];
  const componentName = OasService.componentNameFromRef(requestBody.content[contentType].schema.$ref);
  return (
    <div className="container-fluid box-shadow">
      <h4 className="required">Request body</h4>
      <hr/>
      <p>{requestBody.description}</p>
      <table className="table table-sm">
        <thead>
        <tr>
          <th className="expander"/>
          <th>Content</th>
          <th>Content type</th>
        </tr>
        </thead>
        <tbody>
        <ExpandableRow
          disabledExpansion={componentName === undefined}
          content={
            <RowContent>
              <td>
                {componentName && <i className="fa fa-caret-down" aria-hidden="true"/>}
              </td>
              <td>
                <ComponentLink componentName={componentName}/>
              </td>
              <td>{contentType}</td>
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
};

RequestBody.propTypes = {
  requestBody: PropTypes.object
};

export default RequestBody;
