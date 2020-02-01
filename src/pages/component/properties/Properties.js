import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import PropertyRow from './PropertyRow';

const sortProperties = (props, a, b) => {
  const aRequired = props.required ? props.required.includes(a.propertyName)
                                   : false;
  const bRequired = props.required ? props.required.includes(b.propertyName)
                                   : false;
  if (aRequired !== bRequired) {
    return aRequired ? -1 : 1;
  }
  return a.propertyName.localeCompare(b.propertyName);
};

const Properties = (props) => {
  const properties = OasService.transformProperties(props.properties)
                               .sort((a, b) => sortProperties(props, a, b))
                               .map(property => {
                                 const required = props.required ? props.required.includes(property.propertyName)
                                                                 : false;
                                 return <PropertyRow key={property.propertyName}
                                                     required={required}
                                                     property={property}
                                                     isDiscriminator={property.propertyName === props.discriminatorPropertyName}/>;
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
};

Properties.propTypes = {
  properties: PropTypes.object,
  required: PropTypes.array,
  discriminatorPropertyName: PropTypes.string
};

export default Properties;
