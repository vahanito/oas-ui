import React from 'react';
import Parameters from './parameters/Parameters';
import RequestBody from './RequestBody';
import Responses from './responses/Responses';
import PropTypes from 'prop-types';
import PathComponent from '../../components/PathComponent';

const ResourceContent = ({resource}) => {
  return (
    <>
      <h2><PathComponent method={resource.method} path={resource.path} deprecated={resource.deprecated}/></h2>
      <h5 className="pl-1 pb-3">{resource.operationId}</h5>
      {resource.parameters && <Parameters parameters={resource.parameters}/>}
      {resource.requestBody && <RequestBody requestBody={resource.requestBody}/>}
      {resource.responses && <Responses responses={resource.responses}/>}
    </>
  );
};

ResourceContent.propTypes = {
  resource: PropTypes.object
};

export default ResourceContent;
