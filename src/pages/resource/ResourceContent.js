import React from 'react';
import Parameters from './parameters/Parameters';
import RequestBody from './RequestBody';
import Responses from './responses/Responses';
import PropTypes from 'prop-types';
import PathComponent from "src/components/PathComponent";

ResourceContent.propTypes = {
  resource: PropTypes.object
};

export default function ResourceContent(props) {
  const resource = props.resource;
  return (
    <>
      <h2><PathComponent method={resource.method} path={resource.path}/></h2>
      <h5 className="pl-1 pb-3">{resource.operationId}</h5>
      {resource.parameters && <Parameters parameters={resource.parameters}/>}
      {resource.requestBody && <RequestBody requestBody={resource.requestBody}/>}
      {resource.responses && <Responses responses={resource.responses}/>}
      <pre>{JSON.stringify(resource, null, 2)}</pre>
    </>
  );
}
