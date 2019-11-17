import React from 'react';
import PropTypes from 'prop-types';

const Enumeration = (props) => {
  const enumRows = props.enumeration.map(enumValue =>
    <tr key={enumValue}>
      <td>{enumValue}</td>
    </tr>);
  return (
    <div className="container-fluid box-shadow">
      <h4>Enumeration</h4>
      <table className="table table-sm">
        {enumRows}
      </table>
    </div>
  );
};

Enumeration.propTypes = {
  enumeration: PropTypes.array
};

export default Enumeration;
