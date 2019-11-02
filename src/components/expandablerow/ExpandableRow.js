import React from 'react';
import PropTypes from "prop-types";

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
            <tr onClick={this.setExpanded}>
              <child.type onClick {...child.props} key={i}/>
            </tr>
          );
        })}
        {React.Children.map(this.props.expandableContent || null, (child, i) => {
          return <child.type isExpanded={this.isExpanded} {...child.props} key={i}/>;
        })}
      </>
    );
  }

  setExpanded = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  isExpanded = () => {
    return this.state.isExpanded;
  };

}

ExpandableRow.propTypes = {
  content: PropTypes.any,
  expandableContent: PropTypes.any
};

export default ExpandableRow;
