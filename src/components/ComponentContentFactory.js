import React from 'react';
import OasService from '../services/OasService';
import NotFound from '../pages/NotFound';
import ComponentContent from '../pages/component/ComponentContent';
import PropTypes from 'prop-types';

ComponentContentFactory.propTypes = {
  match: PropTypes.object
};

export default function ComponentContentFactory(props) {
  const componentName = props.match.params['component'];
  const component = OasService.getComponent(componentName);
  return (
    component !== null ? <ComponentContent componentName={componentName}/>
                       : <NotFound component={componentName}/>
  );
}
