import React from 'react';
import PropTypes from 'prop-types';
import ComponentList from './ComponentList';
import CategoriesDropdown from './CategoriesDropdown';
import ResourceList from './ResourceList';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: props.category
    };
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-0">
        <Link to="" className="navbar-brand col-sm-1 col-md-1 mr-0" href="#">oas-ui</Link>

        <ul className="navbar-nav col-sm-1 col-md-1">
          <CategoriesDropdown
            items={this.props.categories}
            selectedItem={this.state.category}
            onItemSelected={this.onItemSelected}
          />
        </ul>
        {this.state.category.toLowerCase() === 'components' && <ComponentList title="Components"/>}
        {this.state.category.toLowerCase() === 'resources' && <ResourceList title="Resources"/>}
      </nav>
    );
  }

  onItemSelected = (item) => {
    this.setState({ category: item });
  };
}

Menu.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.string
};

export default Menu;
