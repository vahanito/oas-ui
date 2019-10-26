import React from 'react';
import Properties from './properties/Properties';
import PropTypes from 'prop-types';

class ComponentContent extends React.Component {

  render() {
    const component = this.props.component;
    return (
      <>
        <h2>{this.props.componentName}</h2>
        {/*<h5 className="pl-1 pb-3">{component.operationId}</h5>*/}
        <p>{component.description}</p>
        {/*{component.discriminator && <Discriminator discriminator={component.discriminator}/>}*/}
        {component.properties && <Properties properties={component.properties}/>}
        <pre>{JSON.stringify(component, null, 2)}</pre>
      </>
    );
  }
}

ComponentContent.propTypes = {
  component: PropTypes.object,
  componentName: PropTypes.string
};

export default ComponentContent;
