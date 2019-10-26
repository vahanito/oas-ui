import React from 'react';
import PropTypes from 'prop-types';

License.propTypes = {
  license: PropTypes.object
};

export default function License(props) {
  return (
    <div className="container box-shadow">
      <h5>License</h5>
      <hr/>
      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col">{props.license.name}</div>
      </div>
      <div className="row">
        <div className="col-md-3">Url</div>
        <div className="col">
          <a target="_blank" rel="noopener noreferrer" href={props.license.url}> {props.license.url}</a>
        </div>
      </div>
    </div>
  );
}
