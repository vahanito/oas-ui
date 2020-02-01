const OasService = {};

OasService.oas = {};

OasService.setOas = (oas) => {
  OasService.oas = oas;
  OasService.oas.paths = Object.keys(OasService.oas.paths).flatMap(path =>
    Object.keys(OasService.oas.paths[path]).flatMap(method => {
      return {
        path: path,
        method: method,
        ...OasService.oas.paths[path][method]
      };
    }));
};

OasService.getPaths = () => {
  return OasService.oas.paths;
};

OasService.getResourcesByTag = (tag) => {
  return OasService.oas.paths
                   .filter(value => value.tags != null)
                   .filter(value => value.tags.includes(tag));
};

OasService.getResourcesWithoutTag = () => {
  return OasService.oas.paths
                   .filter(value => value.tags == null);
};

OasService.getComponents = () => {
  return Object.keys(OasService.oas.components.schemas);
};

OasService.getUniqueTags = () => {
  const tags = Array.from(new Set(OasService.getPaths().flatMap(value => value.tags)));
  tags.sort((a, b) => a.localeCompare(b));
  return tags;
};

OasService.getComponent = (componentName) => {
  const components = OasService.oas.components;
  return (components && components.schemas && components.schemas[componentName])
         ? components.schemas[componentName]
         : undefined;
};

OasService.getResource = (resourceName) => {
  return OasService.getPaths().filter(value => value.operationId === resourceName)[0];
};

OasService.getCategories = () => {
  return [
    ...(OasService.oas.paths ? ['Resources'] : []),
    ...(OasService.oas.components ? ['Components'] : [])
  ];
};

OasService.transformResponses = (responses) => {
  const httpStatuses = Object.keys(responses);
  return httpStatuses.map(httpStatus => {
    return {
      httpStatus: httpStatus,
      ...responses[httpStatus]
    };
  });
};

OasService.transformProperties = (properties) => {
  const propertyNames = Object.keys(properties);
  return propertyNames.map(propertyName => {
    return {
      propertyName: propertyName,
      ...properties[propertyName]
    };
  });
};

OasService.componentNameFromRef = (ref) => {
  if (ref === undefined) {
    return undefined;
  }
  return ref.split('/').pop();
};

OasService.getOneOfParentRef = (oneOf) => {
  const childComponentName = OasService.componentNameFromRef(oneOf[0].$ref);
  const childComponent = OasService.getComponent(childComponentName);
  return childComponent.allOf.filter(value => value.$ref)
                       .pop().$ref;
};

export default OasService;
