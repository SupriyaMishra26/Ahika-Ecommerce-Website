import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import the library styles


const PriceFilter = ({ filterType}) => {
  const [slider, setSlider] = useState({ min: 299, max: 4998 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleSliderChange = (values) => {
    setSlider({ min: values[0], max: values[1] });
  };

  const clearFilter = () => {
    setSlider({ min: 299, max: 4998 });
  };

  
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`price-filter ${isDropdownOpen ? "open" : ""}`}  style={{ marginBottom: "10px" ,marginTop:"10px"}}>
      <div className="gf-block-title" onClick={toggleDropdown} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="h6">
        <span className={`dropdown-arrow ${isDropdownOpen ? 'up' : 'down'}`}></span> 
      
        <span className="filter-type" style={{ marginRight: "60px" }}>{filterType}</span>
        
        </div>
    
        <a className="gf-clear" onClick={clearFilter}>
          Clear
        </a>
     
      </div>
      {isDropdownOpen && (
      
      <div className="gf-block-content">
        <div className="gf-scroll">
         
          <div className="gf-range-inputs">
            <input
              className="gf-range-min grey-input"
              id="min-119081"
              value={slider.min}
              type="text"
              aria-label="Min value"
              
            />
            <span className="gf-range-split"> - </span>
            <input
              className="gf-range-max grey-input"
              id="max-119081"
              value={slider.max}
              type="text"
              aria-label="Max value"
             
            />
          </div>
        </div>
        <Slider
      
        min={299}
        max={4998}
        value={[slider.min, slider.max]}
       
          range={{ draggableTrack: true }}
          onChange={handleSliderChange}
        />
       
      </div>
        )}
        
    </div>
  );
};

export default PriceFilter;
