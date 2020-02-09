import React from 'react';
import PropTypes from 'prop-types';
import Discriminator from './discriminator/Discriminator';
import OasService from '../../services/OasService';
import Parent from './Parent';
import Enumeration from './Enumeration';
import Example from '../../components/Example';
import ExpandableProperties from './properties/ExpandableProperties';
import { getParentRef, getProperties } from './properties/PropertyUtils';

const ComponentContent = ({componentName}) => {
  const component = OasService.getComponent(componentName);
  const discriminator = getDiscriminator(component);
  const parentRef = getParentRef(component);
  const properties = getProperties(component);
  return (
    <>
      <h2>{componentName}</h2>
      <p>{component.description}</p>
      {component.enum && <Enumeration enumeration={component.enum}/>}
      {properties && <ExpandableProperties key={componentName} component={component} componentName={componentName} properties={properties}/>}
      {parentRef && <Parent parentRef={parentRef}/>}
      {discriminator && <Discriminator discriminator={discriminator}/>}
      {component.examples && <Example examples={component.examples} displayNoneAvailableMessage={true}/>}
    </>
  );
};

const getDiscriminator = (component) => {
  if (typeof component.discriminator === 'undefined' && component.allOf) {
    return component.allOf.filter(value => value.discriminator)
                    .map(value => value.discriminator).pop();
  }
  return component.discriminator;
};

ComponentContent.propTypes = {
  componentName: PropTypes.string
};

export default ComponentContent;
