import React from 'react';
import PropTypes from 'prop-types';
import DiscriminatorRow from './DiscriminatorRow';

const Discriminator = ({discriminator}) => {
  const mappings = Object.entries(discriminator.mapping);
  const tableBody = mappings.map(([key, value]) => <DiscriminatorRow key={value}
                                                                     componentName={value}
                                                                     value={key}/>);
  return (
    <div className="container-fluid box-shadow">
      <h4>Discriminator</h4>
      <hr/>
      <div className="row pb-3">
        <div className="col-md-2">
          Property name:
        </div>
        <div className="col">
          <strong>{discriminator.propertyName}</strong>
        </div>
      </div>
      <table className="table table-sm">
        <thead>
        <tr>
          <th className="expander"/>
          <th>Value</th>
          <th>Component</th>
        </tr>
        </thead>
        <tbody>
        {tableBody}
        </tbody>
      </table>
    </div>
  );
};

Discriminator.propTypes = {
  discriminator: PropTypes.object
};

export default Discriminator;
