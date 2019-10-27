import React from 'react';
import PropTypes from 'prop-types';
import ComponentContent from "../ComponentContent";
import OasService from "../../../services/OasService";
import ComponentLink from "../../../components/ComponentLink";

DiscriminatorRow.propTypes = {
  value: PropTypes.string,
  componentName: PropTypes.string,
  propertyName: PropTypes.string,
};

function DiscriminatorRow(props) {
  return (
    <>
      <tr key={props.componentName} data-toggle="collapse" data-target={"." + props.componentName}>
        <td>
          <i className="fa fa-caret-down" aria-hidden="true"/>
        </td>
        <td>{props.propertyName}</td>
        <td>{props.value}</td>
        <td><ComponentLink componentName={props.componentName}/></td>
      </tr>
      <tr key={props.value} className={"collapse " + props.componentName}>
        <td colSpan="100%">
          <div className="box-shadow inner-component">
            <ComponentContent component={OasService.getComponent(props.componentName)}
                              componentName={props.componentName}/>
          </div>
        </td>
      </tr>
    </>
  );
}

export default DiscriminatorRow;
