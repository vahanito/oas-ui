import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoriesDropdown = ({items, selectedItem, onItemSelected}) => {
  const [category, setCategory] = useState(selectedItem);
  const dropdownItems = items.map(item =>
    <button key={item} name={item} type="button" className="dropdown-item"
            onClick={(event) => onSelect(event, onItemSelected, setCategory)}>
      {item}
    </button>
  );
  return (
    <li className="nav-item dropdown">
      <button className="btn btn-dark nav-link dropdown-toggle text-capitalize" type="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        {category}
      </button>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {dropdownItems}
      </div>
    </li>
  );
};

const onSelect = (event, onItemSelected, setCategory) => {
  const item = event.target.name;
  setCategory(item);
  onItemSelected(item);
};

CategoriesDropdown.propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.string,
  onItemSelected: PropTypes.func
};

export default CategoriesDropdown;
