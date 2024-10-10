import React ,{useState} from 'react';


const FabricFilter = ({ filterType, filterId, Fabric }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [itsOpen, setItsOpen] = useState(true);

  const toggleDropdown = () => {
    setItsOpen(!itsOpen);
  };
      
    const toggleCheckboxFilter = (optionId) => {
      const newSelectedOptions = selectedOptions.includes(optionId)
        ? selectedOptions.filter((id) => id !== optionId)
        : [...selectedOptions, optionId];
  
      setSelectedOptions(newSelectedOptions);
    };
  
    return (
      <div>
      <div className={`filter-container ${itsOpen ? 'open' : ''}`}>
        <div className="size-header" onClick={toggleDropdown}>
        
        <span className={`dropdown-arrow ${itsOpen ? 'up' : 'down'}`}></span>
        <span className="filter-type">{filterType}</span>
       
         
          
        </div>
        {itsOpen && (
        <div className="gf-block-content">
          <div className="gf-scroll">
            <ul className="gf-option-box">
              {Fabric.map((option) => (
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

  export default FabricFilter;
