import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ComponentContent from "../../component/ComponentContent";
import ComponentLink from "../../../components/ComponentLink";
import ExpandableRow from "../../../components/ExpandableRow";

class ResponseRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }
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
      <>
        <tr key={componentName + response.httpStatus}
            onClick={this.setExpanded}>
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
        <ExpandableRow isExpanded={this.isExpanded}>
          <ComponentContent component={component} componentName={componentName}/>
        </ExpandableRow>
      </>
    );
  }

  setExpanded = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  isExpanded = () => {
    return this.state.isExpanded;
  };

}

ResponseRow.propTypes = {
  response: PropTypes.object
};

export default ResponseRow;
