import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../services/OasService';
import NotFound from '../pages/NotFound';
import ComponentContent from '../pages/component/ComponentContent';

const ComponentContentFactory = ({match}) => {
  const componentName = match.params['component'];
  const component = OasService.getComponent(componentName);
  return (
    component !== null ? <ComponentContent componentName={componentName}/>
                       : <NotFound component={componentName}/>
  );
};

ComponentContentFactory.propTypes = {
  match: PropTypes.object
};

export default ComponentContentFactory;
