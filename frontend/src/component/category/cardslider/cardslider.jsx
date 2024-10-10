import React from 'react'
import { categories } from './data2';
import CardSlider from './cardsliderItem';
const CategoryData = () => {
    return (
      <>
        <CardSlider datasource={categories} />
      </>
    )
  }
  
  export default CategoryData;