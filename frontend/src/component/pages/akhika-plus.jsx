import React  from 'react'
import { options } from '../Productlist/product';
import FilterOptionBlock from '../Filter/productType';
import PriceFilter from '../Filter/PriceFilter';
import '../Filter/filter.css';
import SizeFilter from '../Filter/sizeFilter';
import { size } from '../Productlist/product';
import ColorFilter from '../Filter/ColourFilter';
import { Fabric } from '../Productlist/product';
import FabricFilter from '../Filter/FabricType';
import { Link } from "react-router-dom";
import ProductFilterBar from '../Filter/productbar';

const handleSortChange = (sortOption) => {
  // Implement logic to update the product list based on the selected sorting option
  console.log(`Sorting changed to: ${sortOption}`);
};



const AhikaPlus = () => {
  return (
    <>
      <div className="ahika-plus-container">

<div className="breadcrumb-container">
<Link to="/">Home</Link>
<span> / </span>
<Link to="/ahika-plus"><span className='ahika'>Ahika Plus</span></Link>
</div>



<div className="thicker-header">
<h1 className="filter-bar-sticky">AHIKA PLUS</h1>
</div>





    <div className="page-container ">
    <div className="filters-container"> 
      <div className="filter-container">
        <FilterOptionBlock
          filterType="PRODUCT TYPE"
          filterId="197181"
          options={options}
        />
      </div>


     



      <div className="separator"></div>
      <div className="filter-container">
        <PriceFilter 
        filterType="PRICE"
        filterId="192181"
      
        />
        </div>
      

      <div className="separator"></div>
      <div className="filter-container">
      <SizeFilter
         filterType="SIZE"
         filterId="119089"
         size={size}
        />
      </div>
      
      <div className="separator"></div>
      <div className="filter-container">
        <ColorFilter
        filterType="COLOUR"
        filterId="132461"
        colors={['Beige', 'Black', 'Blue', 'Brown', 'Burgundy']} 
        />
      </div>

      <div className="separator"></div>
      <div className="filter-container">
      <FabricFilter
         filterType="FABRIC TYPE"
         filterId="119009"
         Fabric={Fabric}
        />
      </div>
      </div>


      

       <div className="filter-bar-container" > 
      <ProductFilterBar productCount={1030} onSortChange={handleSortChange} />
       </div> 
      </div>

      </div>


      </>
   
    
    
  
  )
}

export default AhikaPlus;
