import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './submenu.css';

const Submenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(items ? Array(items.length).fill(false) : []);

  const handleClick = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <ul className="submenu">
      {items && items.map((item, index) => (
        <li key={index}>
          <button onClick={() => handleClick(index)}>
            {isOpen[index] ? '<-' : '+'}{item.label}
          </button>
          {isOpen[index] && item.subcategories && (
            <Submenu items={item.subcategories} />
          )}
          {item.link && (
            <NavLink to={item.link}>
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
