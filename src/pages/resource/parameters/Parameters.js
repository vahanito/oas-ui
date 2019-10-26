import React from 'react';
import PropTypes from 'prop-types';
import ParameterRow from './ParameterRow';

Parameters.propTypes = {
  parameters: PropTypes.array
};

function Parameters(props) {

  const parameters = props.parameters
                          .sort((param1, param2) => param2.required - param1.required)
                          .map(param =>
                            <ParameterRow key={param.name} parameter={param}/>
                          );
  return (
    <div className="container box-shadow">
      <h4>Parameters</h4>
      <hr/>
      <table className="table table-sm">
        <thead>
        <tr>
          <th>Name</th>
          <th>Param type</th>
          <th>Value type</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {parameters}
        </tbody>
      </table>
    </div>
  );
}

export default Parameters;
