import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import PropertyRow from './PropertyRow';

Properties.propTypes = {
  properties: PropTypes.object
};

function Properties(props) {
  const properties = OasService.transformProperties(props.properties)
                               .map(property => <PropertyRow key={property.propertyName} property={property}/>);
  return (
    <div className="container box-shadow">
      <h4>Properties</h4>
      <hr/>
      <table className="table table-sm">
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {properties}
        </tbody>
      </table>
    </div>
  );
}

export default Properties;
