import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';

class ParameterRow extends React.Component {
  render() {
    const parameter = this.props.parameter;
    return (
      <tr>
        <td>
          <label className={parameter.required ? 'required' : undefined}>{parameter.name}</label>
        </td>
        <td>{parameter.in}</td>
        <td>
          {this.paramType(parameter)}
        </td>
        <td>
          {parameter.description}
        </td>
      </tr>
    );
  }

  paramType = (param) => {
    const primitiveType = param.schema.items ? param.schema.items.type : param.schema.type;
    const ref = param.schema.items ? param.schema.items.$ref : param.schema.$ref;
    const resultType = ref ? OasService.componentNameFromRef(ref) : primitiveType;
    return param.schema.items ? resultType + "[]"
                              : resultType;
  };

}

ParameterRow.propTypes = {
  parameter: PropTypes.object
};

export default ParameterRow;
