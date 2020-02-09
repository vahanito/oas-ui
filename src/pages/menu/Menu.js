import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ComponentList from './ComponentList';
import CategoriesDropdown from './CategoriesDropdown';
import ResourceList from './ResourceList';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const [category, setCategory] = useState(props.category);

  const onItemSelected = (item) => {
    setCategory(item);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-0">
      <Link to="" className="navbar-brand col-sm-1 col-md-1 mr-0" href="#">oas-ui</Link>

      <ul className="navbar-nav col-sm-1 col-md-1">
        <CategoriesDropdown
          items={props.categories}
          selectedItem={category}
          onItemSelected={onItemSelected}
        />
      </ul>
      {category.toLowerCase() === 'components' && <ComponentList title="Components"/>}
      {category.toLowerCase() === 'resources' && <ResourceList title="Resources"/>}
    </nav>
  );
};

Menu.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.string
};

export default Menu;
