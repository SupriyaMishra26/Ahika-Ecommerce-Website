import React, { useState } from 'react';

const ColorFilter = ({ filterType, filterId, colors }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [itsOpen, setItsOpen] = useState(true);

  const toggleDropdown = () => {
    setItsOpen(!itsOpen);
  };

  const toggleCheckboxFilter = (color) => {
    const newSelectedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(newSelectedColors);
  };

  return (
    <div className={`gf-option-block gf-option-${filterId} gf-option-block-swatch-text swatch-round swatch-size-32 ${itsOpen ? 'open' : ''}`}>
      <div className="gf-block-title" onClick={toggleDropdown}>
      <span className={`dropdown-arrow ${itsOpen ? 'up' : 'down'}`}></span>
        <span className="filter-type">{filterType}</span>
      </div>
      {itsOpen && (
      <div className="gf-block-content">
        <div className="gf-scroll gf-block-scroll">
          <ul className="gf-option-box">
            {colors.map((color) => (
              <li key={color}>
                <a onClick={() => toggleCheckboxFilter(color)} title={color}>
                  <span className={`gf-option-value ${selectedColors.includes(color) ? 'selected' : ''}`}>
                    {color}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}
    </div>
  );
};

export default ColorFilter;
