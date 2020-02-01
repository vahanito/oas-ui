import React from 'react';
import PropTypes from 'prop-types';

class Enumeration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enumeration: props.enumeration
    };
  }

  render() {
    const enumRows = this.state.enumeration.map(enumValue =>
      <tr key={enumValue}>
        <td>{enumValue}</td>
      </tr>);
    return (
      <div className="container-fluid box-shadow">
        <h4>Enumeration</h4>
        <table className="table table-sm">
          <thead>
          <tr>
            <th>
              {this.displaySortIcon()}
            </th>
          </tr>
          </thead>
          <tbody>
          {enumRows}
          </tbody>
        </table>
      </div>
    );
  };

  displaySortIcon = () => {
    if (this.state.isAsc === undefined) {
      return (
        <span>
          <i className="fa fa-long-arrow-up" aria-hidden="true"/>
          <i className="fa fa-sort-alpha-asc" onClick={this.sortAsc} aria-hidden="true"/>
        </span>
      );
    }
    if (this.state.isAsc) {
      return (<i className="fa fa-sort-alpha-asc" onClick={this.sortDesc} aria-hidden="true"/>);
    }
    return (<i className="fa fa-sort-alpha-desc" onClick={this.sortAsc} aria-hidden="true"/>);
  };

  sortDesc = () => {
    const sortedEnum = [...this.state.enumeration];
    sortedEnum.sort((a, b) => b.localeCompare(a));
    this.setState({
      enumeration: sortedEnum,
      isAsc: false
    });
  };

  sortAsc = () => {
    const sortedEnum = [...this.state.enumeration];
    sortedEnum.sort((a, b) => a.localeCompare(b));
    this.setState({
      enumeration: sortedEnum,
      isAsc: true
    });
  };

}

Enumeration.propTypes = {
  enumeration: PropTypes.array
};

export default Enumeration;
