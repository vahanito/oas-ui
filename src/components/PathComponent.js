import React from 'react';
import PropTypes from 'prop-types';

PathComponent.propTypes = {
  path: PropTypes.string,
  method: PropTypes.string,
  deprecated: PropTypes.bool
};

export default function PathComponent(props) {
  const splitPath = props.path.split('/');
  const path = splitPath.filter(value => value.length > 0)
                        .map(value => value.includes('{')
                                      ? <span key={value}>
                                          /<em><strong className="param">{value}</strong></em>
                                        </span>
                                      : '/' + value);
  return (
    <>
      <span className={props.method}>
        <strong>{props.method}</strong>
      </span>
      <span className={props.deprecated ? 'deprecated' : undefined}>
        {path}
      </span>
    </>
  );
}
