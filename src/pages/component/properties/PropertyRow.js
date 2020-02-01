import React from 'react';
import PropTypes from 'prop-types';
import ExpandableRow from '../../../components/expandablerow/ExpandableRow';
import RowContent from '../../../components/expandablerow/RowContent';
import ExpandableContent from '../../../components/expandablerow/ExpandableContent';
import ComponentContent from '../../../pages/component/ComponentContent';
import OasService from '../../../services/OasService';
import ComponentLink from '../../../components/ComponentLink';
import propertyDetailNames from '../../../services/PropertyDetailNames';
import classNames from 'classnames';

class PropertyRow extends React.Component {

  render() {
    const property = this.props.property;
    const ref = this.getRef(property);
    return (
      <ExpandableRow
        disabledExpansion={ref === undefined}
        content={
          this.rowContent(property, ref)
        }
        expandableContent={
          <ExpandableContent>
            <ComponentContent componentName={OasService.componentNameFromRef(ref)}/>
          </ExpandableContent>
        }
      />
    );
  }

  rowContent = (property, ref) => {
    const propertyInfos = [];
    if (this.props.isDiscriminator) {
      propertyInfos.push(<tr key={property.propertyName + 'discriminator'}>
        <td><span className={'badge badge-success discriminator-label'}>discriminator</span></td>
      </tr>);
    }
    propertyInfos.push(<tr key={property.propertyName}>
      <td>{this.propertyType(property, ref)}</td>
    </tr>);
    propertyInfos.push(<tr key={property.propertyName + 'detail'}>
      <td>{this.propertyTypeDetails(property)}</td>
    </tr>);

    const propertyNameClass = classNames({
       'required': this.props.required,
       'deprecated': property.deprecated
    });
    return (
      <RowContent>

        <td>
          <label className={propertyNameClass}>
              {property.propertyName}
          </label>
        </td>
        <td>
            <table className='table-borderless'>
              <tbody>
              {propertyInfos}
              </tbody>
            </table>
        </td>
        <td>
            <div>{property.description}</div>
            {property.examples && <br/> && <br/> && this.propertyExamples(property)}
        </td>
      </RowContent>
    );
  };

  propertyExamples = (property) => {
      const exampleListItems = Object.entries(property.examples)
              .map(entry => this.propertyExample(entry));
      return (
              <div className={'example-description-section'}>
                  <h6>Examples</h6>
                  <ul>
                      {exampleListItems}
                  </ul>
              </div>
      );
  };

  propertyExample = (exampleEntry) => {
    return (<li key={exampleEntry[0]}><strong>{exampleEntry[0]}:</strong> {exampleEntry[1].value}</li>);
  };

  propertyTypeDetails = (property) => {
    const propertyDetails = Object.entries(propertyDetailNames)
                                  .map(entry => this.getPropertyParameter(property, entry[1], entry[0]));
    const listItems = propertyDetails.filter(value => value).map((propertyDetail) =>
      <tr key={propertyDetail.name}>
        <td>
          {propertyDetail.name}:
        </td>
        <td>
          {propertyDetail.value}
        </td>
      </tr>
    );
    return (
      <table className='table-borderless property-detail-list'>
        <tbody>
        {listItems}
        </tbody>
      </table>
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
    const componentName = ref ? OasService.componentNameFromRef(ref) : undefined;
    if (componentName) {
      return <ComponentLink componentName={componentName} isArray={!!param.items}/>;
    }
    return param.items ? primitiveType + '[]'
                       : primitiveType;
  };

  getPropertyParameter = (property, translatedName, parameterName) => {
    let parameterValue;
    if (property.items && property.items[parameterName]) {
      parameterValue = property.items[parameterName];
    } else if (property[parameterName]) {
      parameterValue = property[parameterName];
    }
    return parameterValue ? {
      name: translatedName,
      value: parameterValue
    } : undefined;
  };

}

PropertyRow.propTypes = {
  property: PropTypes.object,
  required: PropTypes.bool,
  isDiscriminator: PropTypes.bool
};

export default PropertyRow;
