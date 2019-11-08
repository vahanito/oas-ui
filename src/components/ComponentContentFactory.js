import React from 'react';
import PropTypes from 'prop-types';
import OasService from 'src/services/OasService';
import NotFound from 'src/pages/NotFound';
import ComponentContent from "src/pages/component/ComponentContent";

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
