import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import { getDiscriminatorName, getParentRef, getProperties, getRequiredProperties } from './PropertyUtils';
import Properties from './Properties';

class ExpandableProperties extends React.Component {

  constructor(props) {
    super(props);
    const discriminatorName = getDiscriminatorName(props.component);
    this.state = {
      displayAllProperties: false,
      properties: OasService.transformProperties(props.properties),
      required: getRequiredProperties(props.component),
      discriminators: discriminatorName ? [discriminatorName] : [],
      parentProperties: null
    };
  }

  render() {
    const component = this.props.component;
    const parentRef = getParentRef(component);
    let properties = this.state.properties;
    if (this.state.displayAllProperties) {
      properties = properties.concat(this.state.parentProperties);
    }
    return (
      <div className="container-fluid box-shadow">
        <h4>
          Properties
          {parentRef && !this.state.displayAllProperties &&
          <div className="float-right">
            <input type="button" className="btn btn-sm btn-dark" value="Display all properties" onClick={this.displayAllProperties}/>
          </div>}
          {parentRef && this.state.displayAllProperties &&
          <div className="float-right">
            <input type="button" className="btn btn-sm btn-dark" value="Hide all parent properties" onClick={this.hideAllProperties}/>
          </div>}
        </h4>
        <hr/>
        <Properties requiredProperties={this.state.required}
                    properties={properties}
                    discriminators={this.state.discriminators}/>
      </div>
    );
  }

  displayAllProperties = () => {
    if (this.state.parentProperties == null) {
      let parentRef = getParentRef(this.props.component);
      let allProperties = [];
      let required = [];
      let discriminators = [];
      while (parentRef) {
        const parentName = OasService.componentNameFromRef(parentRef);
        const parentComponent = OasService.getComponent(parentName);
        const properties = OasService.transformProperties(getProperties(parentComponent));
        allProperties = allProperties.concat(properties);
        required = required.concat(getRequiredProperties(parentComponent));
        discriminators.push(getDiscriminatorName(parentComponent));
        parentRef = getParentRef(parentComponent);
      }
      const currentRequiredFields = this.state.required ? this.state.required : [];
      discriminators = this.state.discriminators.concat(discriminators);
      this.setState({
        parentProperties: allProperties,
        required: currentRequiredFields.concat(required),
        discriminators: discriminators
      });
    }
    this.setState({
      displayAllProperties: true
    });
  };

  hideAllProperties = () => {
    this.setState({
      displayAllProperties: false
    });
  };

}

ExpandableProperties.propTypes = {
  component: PropTypes.object,
  componentName: PropTypes.string,
  properties: PropTypes.object
};

export default ExpandableProperties;
