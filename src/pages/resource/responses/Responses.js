import React from 'react';
import PropTypes from 'prop-types';
import OasService from 'src/services/OasService';
import ResponseRow from './ResponseRow';

const Responses = (props) => {
  const responses = OasService.transformResponses(props.responses);
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
          {
            responses.map(response => <ResponseRow key={response.httpStatus} response={response} />)
          }
        </tbody>
      </table>
    </div>
  );
};

Responses.propTypes = {
  responses: PropTypes.object
};

export default Responses;
