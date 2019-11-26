import React from 'react';
import PropTypes from 'prop-types';
import ParameterRow from './ParameterRow';

class Parameters extends React.Component {

  render() {
    const headerParams = this.parameters('header');
    const pathParams = this.parameters('path');
    const queryParams = this.parameters('query');
    return (
      <div className="container-fluid box-shadow">
        <h4>Parameters</h4>
        <hr/>
        {!!headerParams.length && this.parameterTable('Headers', headerParams)}
        {!!pathParams.length && this.parameterTable('Path', pathParams)}
        {!!queryParams.length && this.parameterTable('Query', queryParams)}
      </div>
    );
  }

  parameterTable = (title, parameters) => {
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

  parameters = (type) => {
    return this.props.parameters
               .filter(param => param.in === type)
               .sort((param1, param2) => param2.required - param1.required)
               .map(param =>
                 <ParameterRow key={param.name} parameter={param}/>
               );
  };

}

Parameters.propTypes = {
  parameters: PropTypes.array
};

export default Parameters;
