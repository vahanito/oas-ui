import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ComponentLink from '../../../components/ComponentLink';
import ExpandableRow from "../../../components/expandablerow/ExpandableRow";
import RowContent from "../../../components/expandablerow/RowContent";
import ExpandableContent from "../../../components/expandablerow/ExpandableContent";
import ComponentContent from "../ComponentContent";

class PropertyRow extends React.Component {
  render() {
    const property = this.props.property;
    const ref = this.getRef(property);
    return ref ? this.expandableRow(property, ref)
               : this.basicRow(property, ref);
  }

  expandableRow = (property, ref) => {
    return (
      <ExpandableRow
        content={
          <RowContent>
            {this.rowContent(property, ref)}
          </RowContent>
        }
        expandableContent={
          <ExpandableContent>
            <ComponentContent componentName={OasService.componentNameFromRef(ref)}/>
          </ExpandableContent>
        }
      />
    );
  };

  basicRow = (property, ref) => {
    return (
      <tr>
        {this.rowContent(property, ref)}
      </tr>
    );
  };

  rowContent = (property, ref) => {
    return (
      <RowContent>
        <td>
          {ref && <i className="fa fa-caret-down" aria-hidden="true"/>}
        </td>
        <td>
          <label className={this.props.required ? 'required' : undefined}>{property.propertyName}</label>
        </td>
        <td>
          {this.propertyType(property, ref)}
        </td>
        <td>
          {property.description}
        </td>
      </RowContent>
    );
  };

  getRef = (param) => {
    if (param.items) {
      return param.items.oneOf ? OasService.getOneOfParentRef(param.items.oneOf)
                               : param.schema.items.$ref;
    }
    return param.oneOf ? OasService.getOneOfParentRef(param.oneOf) : param.$ref;
  };

  propertyType = (param, ref) => {
    const primitiveType = param.items ? param.items.type : param.type;
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
