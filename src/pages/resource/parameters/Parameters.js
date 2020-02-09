import React from 'react';
import PropTypes from 'prop-types';
import ParameterRow from './ParameterRow';

const Parameters = ({parameters}) => {
  const headerParams = createParameterRows(parameters, 'header');
  const pathParams = createParameterRows(parameters, 'path');
  const queryParams = createParameterRows(parameters, 'query');
  return (
    <div className="container-fluid box-shadow">
      <h4>Parameters</h4>
      <hr/>
      {!!headerParams.length && parameterTable('Headers', headerParams)}
      {!!pathParams.length && parameterTable('Path', pathParams)}
      {!!queryParams.length && parameterTable('Query', queryParams)}
    </div>
  );
};

const parameterTable = (title, parameters) => {
  return (
    <>
      <h6>{title}</h6>
      <table className="table table-sm">
        <thead>
        <tr>
          <th className="expander"/>
          <th>Name</th>
          <th>Value type</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {parameters}
        </tbody>
      </table>
    </>
  );
};

const createParameterRows = (parameters, type) => {
  return parameters.filter(param => param.in === type)
                   .sort((param1, param2) => param2.required - param1.required)
                   .map(param =>
                     <ParameterRow key={param.name} parameter={param}/>
                   );
};

Parameters.propTypes = {
  parameters: PropTypes.array
};

export default Parameters;
