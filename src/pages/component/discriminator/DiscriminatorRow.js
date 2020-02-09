import React from 'react';
import PropTypes from 'prop-types';
import ComponentContent from '../ComponentContent';
import ComponentLink from '../../../components/ComponentLink';
import ExpandableRow from '../../../components/expandablerow/ExpandableRow';
import ExpandableContent from '../../../components/expandablerow/ExpandableContent';

const DiscriminatorRow = ({value, componentName}) => {
  return (
    <ExpandableRow
      content={
        <>
          <td>{value}</td>
          <td><ComponentLink componentName={componentName}/></td>
        </>
      }
      expandableContent={
        <ExpandableContent>
          <ComponentContent componentName={componentName}/>
        </ExpandableContent>
      }
    />
  );
};

DiscriminatorRow.propTypes = {
  value: PropTypes.string,
  componentName: PropTypes.string
};

export default DiscriminatorRow;
