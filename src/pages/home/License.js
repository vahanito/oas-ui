import React from 'react';
import PropTypes from 'prop-types';

const License = ({license}) => {
  return (
    <div className="container-fluid box-shadow">
      <h5>License</h5>
      <hr/>
      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col">{license.name}</div>
      </div>
      <div className="row">
        <div className="col-md-3">Url</div>
        <div className="col">
          <a target="_blank" rel="noopener noreferrer" href={license.url}> {license.url}</a>
        </div>
      </div>
    </div>
  );
};

License.propTypes = {
  license: PropTypes.object
};

export default License;
