import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ComponentLink from '../../../components/ComponentLink';
import ExpandableRow from '../../../components/expandablerow/ExpandableRow';
import ExpandableContent from '../../../components/expandablerow/ExpandableContent';
import ComponentContent from '../../../pages/component/ComponentContent';
import classNames from 'classnames';

const ParameterRow = ({parameter}) => {
  const ref = getRef(parameter);
  return (
    <ExpandableRow
      disabledExpansion={ref === undefined}
      content={rowContent(parameter, ref)}
      expandableContent={
        <ExpandableContent>
          <ComponentContent componentName={OasService.componentNameFromRef(ref)}/>
        </ExpandableContent>
      }
    />
  );
};

const rowContent = (parameter, ref) => {
  const classes = classNames({
    'required': parameter.required,
    'deprecated': parameter.deprecated
  });
  return (
    <>
      <td>
        <label className={classes}>{parameter.name}</label>
      </td>
      <td>
        {paramType(parameter, ref)}
      </td>
      <td>
        {parameter.description}
        {parameter.examples && <br/> && <br/> && parameterExamples(parameter)}
      </td>
    </>
  );
};

const parameterExamples = (parameter) => {
  const exampleListItems = Object.entries(parameter.examples)
                                 .map(entry => propertyExample(entry));
  return (
    <div className={'example-description-section'}>
      <h6>Examples</h6>
      <ul>
        {exampleListItems}
      </ul>
    </div>
  );
};

const propertyExample = (exampleEntry) => {
  return (<li><strong>{exampleEntry[0]}:</strong> {exampleEntry[1].value}</li>);
};

const getRef = (param) => {
  return param.schema.items ? param.schema.items.$ref : param.schema.$ref;
};

const paramType = (param, ref) => {
  const primitiveType = param.schema.items ? param.schema.items.type : param.schema.type;
  const componentName = ref ? OasService.componentNameFromRef(ref) : undefined;
  if (componentName) {
    return <ComponentLink componentName={componentName} isArray={!!param.schema.items}/>;
  }
  return param.schema.items ? primitiveType + '[]'
                            : primitiveType;
};

ParameterRow.propTypes = {
  parameter: PropTypes.object
};

export default ParameterRow;
