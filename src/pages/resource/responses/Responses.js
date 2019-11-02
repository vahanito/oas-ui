import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ResponseRow from './ResponseRow';

class Responses extends React.Component {

  render() {
    const responses = OasService.transformResponses(this.props.responses)
                                .map(response => <ResponseRow key={response.httpStatus} response={response}/>);
    return (
      <div className="container-fluid box-shadow">
        <h4>Responses</h4>
        <hr/>
        <table className="table table-sm">
          <thead>
          <tr>
            <th className="expander"/>
            <th>HttpStatus</th>
            <th>Description</th>
            <th>Content</th>
            <th>Content type</th>
          </tr>
          </thead>
          <tbody>
          {responses}
          </tbody>
        </table>
      </div>
    );
  }
}

Responses.propTypes = {
  responses: PropTypes.object
};

export default Responses;