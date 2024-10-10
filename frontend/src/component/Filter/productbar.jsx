import React, { useState } from 'react';

const ProductFilterBar = ({ productCount, onSortChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('New Arrival');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeSortBy = (sortOption) => {
    setSelectedSort(sortOption);
    onSortChange(sortOption);
    setDropdownOpen(false);
  };


  return (
    <div className="gf-actions">
      <div className="gf-filter-trigger">
        <div
          className="gf-refine-toggle-mobile"
          tabIndex="0"
          onClick={toggleDropdown}
        >
          <i className="fa fa-tasks" aria-hidden="true"></i> Filter By
        </div>
      </div>

      <span className="gf-summary">
        <b>{productCount}</b> Products
      </span>

      <div className={`gf-filter-selection ${isDropdownOpen ? 'open' : ''}`}>
        <div className="sort-by active">
          <label
            htmlFor="globo-dropdown-sort_options"
            className="sort-by-toggle"
            role="button"
            tabIndex="0"
            aria-expanded={isDropdownOpen}
          >
            <span>{selectedSort}</span>
          </label>
          <div id="globo-dropdown-sort_options" className="globo-dropdown-custom__options">
            {['New Arrival', 'Popularity', 'Price, low to high', 'Price, high to low'].map((option) => (
              <span key={option} onClick={() => changeSortBy(option)}>
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterBar;
