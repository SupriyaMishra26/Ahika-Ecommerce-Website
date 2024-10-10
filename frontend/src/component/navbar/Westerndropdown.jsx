

import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericDropdown from './genericdropdown';

const WesternDrop = () => {
  const categories = [
   {
    categoryTitle: 'COLLECTIONS',
    items: [
      {
        label: 'JUMPSUITS',
        link:'/product/western-wear/jumpsuits',
        subcategories: [
          { label: 'FABRIC', items:  [
            { label: 'POLY CREPE', link: `/product/western-wear/jumpsuits/fabric/poly-crepe` },
            { label: 'COTTON', link: `/product/western-wear/jumpsuits/fabric/cotton` },
            { label: 'RAYON', link: `/product/western-wear/jumpsuits/fabric/rayon` },
            { label: 'GEORGETTE', link: `/product/western-wear/jumpsuits/fabric/georgette` },
            { label: 'CHIFFON', link: `/product/western-wear/jumpsuits/fabric/chiffon` },
        
        ] },

         

          { label: 'STYLE', items: [
            { label: 'ANARKALI', link: `/product/western-wear/jumpsuits/style/anarkali` },
            { label: 'A-LINE', link: `/product/western-wear/jumpsuits/style/a-line` },
            { label: 'STRAIGHT', link: `/product/western-wear/jumpsuits/style/straight` },
            { label: 'ANGRAKHA', link: `/product/western-wear/jumpsuits/style/angrakha` },
          ] },
          
          { label: 'PRINT & PATTERN', items: [
            { label: 'Item 3', link: `/product/western-wear/jumpsuits/print-pattern/item-3` },
                { label: 'Item 4', link: `/product/western-wear/jumpsuits/print-pattern/item-4` },
          ] },
        ],
      },
      
      
     
     
     
      
      {
        label: 'TOPS',
        link:'',
        subcategories: [
          { label: 'Subcategory 1', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory ', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 2', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          { label: 'Subcategory 3', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
         
        ],
      },

      {
        label: ' DRESSES',
        link:'',
        subcategories: [
          { label: 'Subcategory 1', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 2', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          { label: 'Subcategory 3', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 4', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          
        ],
      },

      {
        label:'SHOP ALL',
        link:''
      },
     
      
    ],
  },
 
];



  return (

    <NavLink to="/products/western-wear" className='no-underline'>
    <GenericDropdown title="WESTERN WEAR" categories={categories} />
  </NavLink>
    // <NavLink to="/western-wear" className='no-underline'>
    //   <GenericDropdown title="WESTERN WEAR" categories={categories} />
    // </NavLink>
  );

  
};

export default WesternDrop;
