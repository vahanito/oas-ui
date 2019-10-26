import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import {Link} from 'react-router-dom';

ResponseRow.propTypes = {
  response: PropTypes.object
};

function ResponseRow(props) {
  const response = props.response;
  let contentType;
  let componentName;
  if (response.content) {
    contentType = Object.keys(response.content)[0];
    componentName = response.content[contentType].schema.items
                    ? OasService.componentNameFromRef(response.content[contentType].schema.items.$ref)
                    : OasService.componentNameFromRef(response.content[contentType].schema.$ref);
  }

  return (
    <tr>
      <td>
        {response.httpStatus}
      </td>
      <td>
        {response.description}
      </td>
      <td>
        {componentName && <Link to={'/components/' + componentName}>{componentName}</Link>}
        {componentName &&
         <Link to={'/components/' + componentName} target="_blank">
           <i className="pl-2 fa fa-external-link" aria-hidden="true"/>
         </Link>
        }
      </td>
      <td>
        {contentType}
      </td>
    </tr>
  );
}

export default ResponseRow;
