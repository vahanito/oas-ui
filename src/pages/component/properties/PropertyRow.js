import React from 'react';
import PropTypes from 'prop-types';
import ExpandableRow from "../../../components/expandablerow/ExpandableRow";
import RowContent from "../../../components/expandablerow/RowContent";
import ExpandableContent from "../../../components/expandablerow/ExpandableContent";
import ComponentContent from "../../../pages/component/ComponentContent";
import OasService from "../../../services/OasService";
import ComponentLink from "../../../components/ComponentLink";

class PropertyRow extends React.Component {

  render() {
    const property = this.props.property;
    const ref = this.getRef(property);
    return (
      <ExpandableRow
        disabledExpansion={ref === undefined}
        content={
          <RowContent>
            {this.rowContent(property, ref)}
          </RowContent>
        }
        expandableContent={
          <ExpandableContent isExpanded>
            <ComponentContent componentName={OasService.componentNameFromRef(ref)}/>
          </ExpandableContent>
        }
      />
    );
  }

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

  getRef = (property) => {
    if (property.items) {
      return property.items.oneOf ? OasService.getOneOfParentRef(property.items.oneOf)
                                  : property.items.$ref;
    }
    return property.oneOf ? OasService.getOneOfParentRef(property.oneOf) : property.$ref;
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
