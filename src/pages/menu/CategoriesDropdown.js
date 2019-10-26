import React from 'react';
import PropTypes from 'prop-types';

class CategoriesDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: props.selectedItem
    };
  }

  render() {
    const dropdownItems = this.props.items.map(item =>
      <button key={item} type="button" className="dropdown-item"
              onClick={() => this.onItemSelected(item)}>
        {item}
      </button>
    );
    return (
      <li className="nav-item dropdown">
        <button className="btn btn-dark nav-link dropdown-toggle text-capitalize" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          {this.state.category}
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {dropdownItems}
        </div>
      </li>
    );
  }

  onItemSelected = (item) => {
    this.setState({
      category: item
    });
    this.props.onItemSelected(item);
  };
}

CategoriesDropdown.propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.string,
  onItemSelected: PropTypes.func
};

export default CategoriesDropdown;
