// EthenicDropdown.js

import React  from 'react';

import { NavLink,useNavigate} from 'react-router-dom';
import Submenu from './hamburger/submenu';
import GenericDropdown from './genericdropdown';
import { useState } from 'react';

const EthenicDrop = () => {
  const navigate = useNavigate();
  
  const categories = [
   {
    categoryTitle: 'COLLECTIONS',
    items: [
      {
        label: 'KURTAS',
        link:'/products/ethenic/kurtas',
        subcategories: [
          { label: 'FABRIC', items: 
          [
            { label: 'POLY CREPE', link: '/products/ethenic/kurtas/poly-crepe' },
            { label: 'COTTON', link: '/products/ethenic/kurtas/cotton' },
            { label: 'RAYON', link: '/products/ethenic/kurtas/rayon' },
            { label: 'GEORGETTE', link: '/products/ethenic/kurtas/georgette' },
            { label: 'CHIFFON', link: '/products/ethenic/kurtas/chiffon' },
        ] },

        { label: 'WORK', items: [
          { label: 'Item 3', link: '#', },
          { label: 'Item 4', link: '#', }
        ] },

        { label: 'STYLE', items: [
          { label: 'ANARKALI', link: '#',  },
          { label: 'A-LINE', link: '#',  },
          { label: 'STRAIGHT', link: '#',  },
          { label: 'ANGRAKHA', link: '#',  }
        ] },

        { label: 'PRINT & PATTERN', items: [
          { label: 'Item 3', link: '#',  },
          { label: 'Item 4', link: '#',  }
        ] },
      ],
    },
      
     
     
     
      
      {
        label: 'KURTIS & TUNICS',
        link:'',
        subcategories: [
          { label: 'Subcategory 1', items: 
          [{ label: 'Item 1', link: '#' }, 
          { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory ', items: 
          [{ label: 'Item 1', link: '#' }, 
          { label: 'Item 2', link: '#' }
        ] },
          { label: 'Subcategory 2', items: 
          [{ label: 'Item 3', link: '#' }, 
          { label: 'Item 4', link: '#' }
        ] },
          { label: 'Subcategory 3', items: 
          [{ label: 'Item 1', link: '#' }, 
          { label: 'Item 2', link: '#' }] },
         
        ],
      },

      {
        label: ' KURTA SETS',
        link:'',
        subcategories: [
          { label: 'Subcategory 1', items: 
          [{ label: 'Item 1', link: '#' }, 
          { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 2', items:
           [{ label: 'Item 3', link: '#' }, 
           { label: 'Item 4', link: '#' }] },
          { label: 'Subcategory 3', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 4', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          
        ],
      },

      {
        label: ' SUIT SETS',
        link:'',
        subcategories: [
          { label: 'Subcategory 1', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 2', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          { label: 'Subcategory 3', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 4', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          
        ],
      },

      {
        label: 'KAFTAN SETS',
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
  <>
   
   <NavLink to='/products/ethenic' className="no-underline">
        <GenericDropdown title="ETHENIC WEAR" categories={categories} />
      </NavLink>
      
     
    {/* <NavLink to="/" className="no-underline" >
        <Submenu items={categories[0].items} />
      </NavLink> */}
  </>
);
};
export default EthenicDrop;
