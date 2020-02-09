import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../services/OasService';
import ComponentLink from '../../components/ComponentLink';
import ExpandableRow from '../../components/expandablerow/ExpandableRow';
import ExpandableContent from '../../components/expandablerow/ExpandableContent';
import ComponentContent from '../../pages/component/ComponentContent';
import Example from '../../components/Example';

const RequestBody = ({requestBody}) => {
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
            <>
              <td>
                <ComponentLink componentName={componentName}/>
              </td>
              <td>{contentType}</td>
            </>
          }
          expandableContent={
            <ExpandableContent>
              <ComponentContent componentName={componentName}/>
            </ExpandableContent>
          }
        />
        </tbody>
      </table>
      {requestBody.content[contentType].examples && <Example examples={requestBody.content[contentType].examples}/>}
    </div>
  );
};

RequestBody.propTypes = {
  requestBody: PropTypes.object
};

export default RequestBody;
