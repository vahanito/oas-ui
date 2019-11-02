import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import PropertyRow from './PropertyRow';

Properties.propTypes = {
  properties: PropTypes.object,
  required: PropTypes.array
};

function Properties(props) {
  const properties = OasService.transformProperties(props.properties)
                               .map(property => {
                                 const required = props.required ? props.required.includes(property.propertyName)
                                                                 : false;
                                 return <PropertyRow key={property.propertyName}
                                                     required={required}
                                                     property={property}/>;
                               });
  return (
    <div className="container-fluid box-shadow">
      <h4>Properties</h4>
      <hr/>
      <table className="table table-sm">
        <thead>
        <tr>
          <th className="expander"/>
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
