export function getProperties(component) {
  if (typeof component.properties === 'undefined' && component.allOf) {
    return component.allOf.filter(value => value.properties)
                    .map(value => value.properties).pop();
  }
  return component.properties;
}

export function getRequiredProperties(component) {
  if (typeof component.required === 'undefined' && component.allOf) {
    return component.allOf.filter(value => value.properties)
                    .map(value => value.required).pop();
  }
  return component.required;
}

export function getParentRef(component) {
  return component.allOf ? component.allOf
                                    .filter(value => value.$ref)
                                    .pop().$ref
                         : undefined;
}

export function getDiscriminatorName(component) {
  return component.discriminator && component.discriminator.propertyName ? component.discriminator.propertyName : undefined;
}
