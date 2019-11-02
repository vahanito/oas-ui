import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ComponentContent from "../../component/ComponentContent";
import ComponentLink from "../../../components/ComponentLink";
import ExpandableRow from "../../../components/expandablerow/ExpandableRow";
import ExpandableContent from "../../../components/expandablerow/ExpandableContent";
import RowContent from "../../../components/expandablerow/RowContent";

class ResponseRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const response = this.props.response;
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
      <ExpandableRow
        content={
          <RowContent>
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
          </RowContent>
        }
        expandableContent={
          <ExpandableContent>
            <ComponentContent componentName={componentName}/>
          </ExpandableContent>
        }
      />
    );
  }

}

ResponseRow.propTypes = {
  response: PropTypes.object
};

export default ResponseRow;
