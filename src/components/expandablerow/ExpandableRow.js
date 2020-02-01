import React from 'react';
import PropTypes from 'prop-types';

class ExpandableRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  render() {
    return (
      <>
        {React.Children.map(this.props.content || null, (child, i) => {
          return (
            <tr onClick={this.toggleExpand}>
              <td>
                {!this.props.disabledExpansion && this.state.isExpanded && <i className="fa fa-caret-down" aria-hidden="true"/>}
                {!this.props.disabledExpansion && !this.state.isExpanded && <i className="fa fa-caret-right" aria-hidden="true"/>}
              </td>
              <child.type {...child.props} key={i}/>
            </tr>
          );
        })}
        {!this.isExpansionDisabled() && React.Children.map(this.props.expandableContent || null, (child, i) => {
          return <child.type isExpanded={this.state.isExpanded} {...child.props} key={i}/>;
        })}
      </>
    );
  }

  isExpansionDisabled = () => {
    return this.props.disabledExpansion === true;
  };

  toggleExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };
}

ExpandableRow.propTypes = {
  content: PropTypes.any,
  expandableContent: PropTypes.any,
  disabledExpansion: PropTypes.bool
};

export default ExpandableRow;
