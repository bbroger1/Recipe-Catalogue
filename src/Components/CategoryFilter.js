import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onChange, value }) => {
  const categories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];
  return (
    <div className="cat-filter">
      <h2>CHOOSE ANOTHER CATEGORY</h2>
      <select onChange={onChange} value={value} className="filter m-20">
        {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoryFilter;
