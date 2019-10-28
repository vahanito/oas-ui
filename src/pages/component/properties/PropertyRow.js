import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ComponentLink from '../../../components/ComponentLink';

class PropertyRow extends React.Component {
  render() {
    const property = this.props.property;
    return (
      <tr>
        <td>
          <label className={this.props.required ? 'required' : undefined}>{property.propertyName}</label>
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
    const componentName = ref ?  OasService.componentNameFromRef(ref) : undefined;
    if (componentName) {
      return <ComponentLink componentName={componentName} isArray={!!param.items}/>;
    }
    return param.items ? primitiveType + '[]'
                       : primitiveType;
  };

}

PropertyRow.propTypes = {
  property: PropTypes.object,
  required: PropTypes.bool
};

export default PropertyRow;
