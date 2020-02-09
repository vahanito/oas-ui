import React from 'react';
import PropTypes from 'prop-types';

const PathComponent = ({path, method, deprecated}) => {
  const pathElement = path.split('/')
                          .filter(value => value.length > 0)
                          .map(value => value.includes('{')
                                        ?
                                        <span key={value}>
                                          /<em><strong className="param">{value}</strong></em>
                                        </span>
                                        : '/' + value);
  return (
    <>
      <span className={method}>
        <strong>{method}</strong>
      </span>
      <span className={deprecated ? 'deprecated' : undefined}>
        {pathElement}
      </span>
    </>
  );
};

PathComponent.propTypes = {
  path: PropTypes.string,
  method: PropTypes.string,
  deprecated: PropTypes.bool
};

export default PathComponent;
