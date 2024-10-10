import React ,{useState} from 'react';


const FilterOptionBlock = ({ filterType, filterId, options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
      
    const toggleCheckboxFilter = (optionId) => {
      const newSelectedOptions = selectedOptions.includes(optionId)
        ? selectedOptions.filter((id) => id !== optionId)
        : [...selectedOptions, optionId];
  
      setSelectedOptions(newSelectedOptions);
    };
  
    return (
      <div>
      <div className={`filter-container ${isOpen ? 'open' : ''}`}>
        <div className="filter-header" onClick={toggleDropdown}>
       
        <span className={`dropdown-arrow ${isOpen ? 'up' : 'down'}`}></span>
       
          <span className="filter-type">{filterType}</span>
          
        </div>
        {isOpen && (
        <div className="gf-block-content">
          <div className="gf-scroll">
            <ul className="gf-option-box">
              {options.map((option) => (
                <li key={option.id}>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked={selectedOptions.includes(option.id)}
                      onChange={() => toggleCheckboxFilter(option.id)}
                    />
                    <span className="gf-label">{option.name}</span>
                    <span className="gf-count">({option.count})</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
          )}
        </div>


      
      
      
      
    </div>
      
      


        
     


      );
    };

  export default  FilterOptionBlock;
