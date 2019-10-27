import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../services/OasService';
import ComponentLink from "../../components/ComponentLink";

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
            <th>Content</th>
            <th>Content type</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <ComponentLink componentName={componentName}/>
            </td>
            <td>{contentType}</td>
          </tr>
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
