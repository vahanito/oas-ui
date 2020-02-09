import React from 'react';
import PropTypes from 'prop-types';
import PropertyRow from './PropertyRow';

const Properties = ({properties, requiredProperties, discriminators}) => {
  const propertiesElements = properties.sort((a, b) => sortProperties(requiredProperties, a, b))
                                       .map((property, i) => {
                                         const required = requiredProperties ? requiredProperties.includes(property.propertyName)
                                                                             : false;
                                         return <PropertyRow key={property.propertyName + i}
                                                             required={required}
                                                             property={property}
                                                             isDiscriminator={discriminators.includes(property.propertyName)}/>;
                                       });
  return (
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
      {propertiesElements}
      </tbody>
    </table>
  );
};

const sortProperties = (requiredProperties, a, b) => {
  const aRequired = requiredProperties ? requiredProperties.includes(a.propertyName)
                                       : false;
  const bRequired = requiredProperties ? requiredProperties.includes(b.propertyName)
                                       : false;
  if (aRequired !== bRequired) {
    return aRequired ? -1 : 1;
  }
  return a.propertyName.localeCompare(b.propertyName);
};

Properties.propTypes = {
  properties: PropTypes.array,
  requiredProperties: PropTypes.array,
  discriminators: PropTypes.array
};

export default Properties;
