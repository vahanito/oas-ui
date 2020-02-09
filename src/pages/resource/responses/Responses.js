import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ResponseRow from './ResponseRow';

const Responses = ({responses}) => {
  const transformedResponses = OasService.transformResponses(responses);
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
            transformedResponses.map(response => <ResponseRow key={response.httpStatus} response={response}/>)
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
