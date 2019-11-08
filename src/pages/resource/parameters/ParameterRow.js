import React from 'react';
import PropTypes from 'prop-types';
import OasService from 'services/OasService';
import ComponentLink from 'components/ComponentLink';
import RowContent from 'components/expandablerow/RowContent';
import ExpandableRow from 'components/expandablerow/ExpandableRow';
import ExpandableContent from 'components/expandablerow/ExpandableContent';
import ComponentContent from 'pages/component/ComponentContent';

class ParameterRow extends React.Component {

  render() {
    const parameter = this.props.parameter;
    const ref = this.getRef(parameter);
    return (
      <ExpandableRow
        disabledExpansion={ref === undefined}
        content={
          <RowContent>
            {this.rowContent(parameter, ref)}
          </RowContent>
        }
        expandableContent={
          <ExpandableContent>
            <ComponentContent componentName={OasService.componentNameFromRef(ref)}/>
          </ExpandableContent>
        }
      />
    );
  }

  rowContent = (parameter, ref) => {
    return (
      <RowContent>
        <td>
          {ref && <i className="fa fa-caret-down" aria-hidden="true"/>}
        </td>
        <td>
          <label className={parameter.required ? 'required' : undefined}>{parameter.name}</label>
        </td>
        <td>
          {this.paramType(parameter, ref)}
        </td>
        <td>
          {parameter.description}
        </td>
      </RowContent>
    );
  };

  getRef = (param) => {
    return param.schema.items ? param.schema.items.$ref : param.schema.$ref;
  };

  paramType = (param, ref) => {
    const primitiveType = param.schema.items ? param.schema.items.type : param.schema.type;
    const componentName = ref ? OasService.componentNameFromRef(ref) : undefined;
    if (componentName) {
      return <ComponentLink componentName={componentName} isArray={!!param.schema.items}/>;
    }
    return param.schema.items ? primitiveType + '[]'
                              : primitiveType;
  };
}

ParameterRow.propTypes = {
  parameter: PropTypes.object
};

export default ParameterRow;
