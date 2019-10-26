import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';

class PropertyRow extends React.Component {
  render() {
    const property = this.props.property;
    return (
      <tr>
        <td>
          <label className={property.required ? 'required' : undefined}>{property.propertyName}</label>
        </td>
        <td>
          {this.propertyType(property)}
        </td>
        <td>
          {property.description}
        </td>
      </tr>
    );
  }

  propertyType = (param) => {
    const primitiveType = param.items ? param.items.type : param.type;
    const ref = param.items ? param.items.$ref : param.$ref;
    const resultType = ref ? OasService.componentNameFromRef(ref) : primitiveType;
    return param.items ? resultType + '[]'
                       : resultType;
  };

}

PropertyRow.propTypes = {
  property: PropTypes.object
};

export default PropertyRow;
