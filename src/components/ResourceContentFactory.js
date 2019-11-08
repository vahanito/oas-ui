import React from 'react';
import PropTypes from 'prop-types';
import OasService from 'src/services/OasService';
import ResourceContent from 'src/pages/resource/ResourceContent';
import NotFound from 'src/pages/NotFound';

ResourceContentFactory.propTypes = {
  match: PropTypes.object
};

export default function ResourceContentFactory(props) {
  const resourceName = props.match.params['resource'];
  const resource = OasService.getResource(resourceName);
  return (
    resource ? <ResourceContent resource={resource}/> : <NotFound resource={resourceName}/>
  );
}
