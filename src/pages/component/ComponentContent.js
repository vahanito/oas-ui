import React from 'react';
import PropTypes from 'prop-types';
import Properties from './properties/Properties';
import Discriminator from './discriminator/Discriminator';
import OasService from '../../services/OasService';
import Parent from './Parent';

const getProperties = (component) => {
  if (typeof component.properties === 'undefined' && component.allOf) {
    return component.allOf.filter(value => value.properties)
      .map(value => value.properties).pop();
  }
  return component.properties;
};

const getDiscriminator = (component) => {
  if (typeof component.discriminator === 'undefined' && component.allOf) {
    return component.allOf.filter(value => value.discriminator)
                    .map(value => value.discriminator).pop();
  }
  return component.discriminator;
};

const getRequiredProperties = (component) => {
  if (typeof component.required === 'undefined' && component.allOf) {
    return component.allOf.filter(value => value.properties)
      .map(value => value.required).pop();
  }
  return component.required;
};

const ComponentContent = (props) => {
  const component = OasService.getComponent(props.componentName);
  const properties = getProperties(component);
  const discriminator = getDiscriminator(component);
  const requiredProperties = getRequiredProperties(component);
  const parentRef = component.allOf ? component.allOf.filter(value => value.$ref)
                                                .pop().$ref
                                    : undefined;
  return (
    <>
      <h2>{props.componentName}</h2>
      <p>{component.description}</p>
      {properties && <Properties properties={properties} required={requiredProperties}/>}
      {parentRef && <Parent parentRef={parentRef}/>}
      {discriminator && <Discriminator discriminator={discriminator}/>}
      <pre>{JSON.stringify(component, null, 2)}</pre>
    </>
  );
};

ComponentContent.propTypes = {
  componentName: PropTypes.string
};

export default ComponentContent;
