import React from 'react';
import PropTypes from 'prop-types';
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
  const properties = props.properties
                          .sort((a, b) => sortProperties(props, a, b))
                          .map((property, i) => {
                            const required = props.required ? props.required.includes(property.propertyName)
                                                            : false;
                            return <PropertyRow key={property.propertyName + i}
                                                required={required}
                                                property={property}
                                                isDiscriminator={props.discriminators.includes(property.propertyName)}/>;
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
      {properties}
      </tbody>
    </table>
  );
};

Properties.propTypes = {
  properties: PropTypes.array,
  required: PropTypes.array,
  discriminators: PropTypes.array
};

export default Properties;
