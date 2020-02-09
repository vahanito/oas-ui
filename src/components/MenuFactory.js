import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../services/OasService';
import Menu from '../pages/menu/Menu';

const MenuFactory = ({match}) => {
  const categories = OasService.getCategories();
  const category = match.params.category ? match.params.category : categories[0];
  return (
    <Menu categories={categories}
          category={category}
          item={match.params.item}/>
  );
};

MenuFactory.propTypes = {
  match: PropTypes.object
};

export default MenuFactory;
