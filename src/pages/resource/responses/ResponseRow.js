import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ComponentContent from "../../component/ComponentContent";
import ComponentLink from "../../../components/ComponentLink";

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

  const component = OasService.getComponent(componentName);
  return (
    <>
      <tr key={componentName + response.httpStatus}
          data-toggle="collapse"
          data-target={"." + componentName + response.httpStatus}>
        <td>
          {component && <i className="fa fa-caret-down" aria-hidden="true"/>}
        </td>
        <td>
          {response.httpStatus}
        </td>
        <td>
          {response.description}
        </td>
        <td>
          <ComponentLink componentName={componentName}/>
        </td>
        <td>
          {contentType}
        </td>
      </tr>
      {component && <tr className={"box-shadow inner-component collapse " + componentName + response.httpStatus}>
        <td colSpan="100%">
          <ComponentContent component={component} componentName={componentName}/>
        </td>
      </tr>}
    </>
  );
}

export default ResponseRow;
