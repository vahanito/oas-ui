import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import OasService from '../../services/OasService';

class RequestBody extends React.Component {

  render() {
    const requestBody = this.props.requestBody;
    const contentType = Object.keys(requestBody.content)[0];
    const componentName = OasService.componentNameFromRef(requestBody.content[contentType].schema.$ref);
    return (
      <div className="container box-shadow">
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
              <Link to={'/components/' + componentName}>{componentName}</Link>
              <Link to={'/components/' + componentName} target="_blank">
                <i className="pl-2 fa fa-external-link" aria-hidden="true"/>
              </Link>
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
