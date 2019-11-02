import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../services/OasService';
import ComponentLink from "../../components/ComponentLink";
import ExpandableRow from "../../components/expandablerow/ExpandableRow";
import ExpandableContent from "../../components/expandablerow/ExpandableContent";
import RowContent from "../../components/expandablerow/RowContent";
import ComponentContent from "../component/ComponentContent";

class RequestBody extends React.Component {

  render() {
    const requestBody = this.props.requestBody;
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
            content={
              <RowContent>
                <td>
                  <i className="fa fa-caret-down" aria-hidden="true"/>
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
  }
}

RequestBody.propTypes = {
  requestBody: PropTypes.object
};

export default RequestBody;
