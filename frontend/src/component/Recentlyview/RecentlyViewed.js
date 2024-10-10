// RecentlyViewed.jsx

import React from 'react';
import { useRecentlyViewed } from '../../constants/recentlyviewcontext';
import { Carousel } from 'react-bootstrap';
import { categories } from '../category/cardslider/data2';
import { Cart } from '../category/data';

import './recentview.css'

const RecentlyViewed = ({  maxRecentItems }) => {                              //maxRecentItems 
  const { recentlyViewed } = useRecentlyViewed();


  // Combine categories, Cart, and recentlyViewed, and remove duplicates based on product id
  const uniqueProducts = Array.from(
    new Map([...categories, ...Cart, ...recentlyViewed].map((product) => [product.id, product]))
  ).map(([id, product]) => product);

  // Create sets of four products for each slide
  const productSets = [];
  for (let i = 0; i < uniqueProducts.length-2; i += 1) {
    const productSet = uniqueProducts.slice(i, i + 4);
    productSets.push(productSet);
  }
  
 
  // const allProducts = [...categories, ...Cart,...recentlyViewed];
  // //[ ...categories, ...Cart,...recentlyViewed].slice(0, maxRecentItems); 

  // const sets = [];
  // for (let i = 0; i < allProducts.length-2; i += 1) {
  //   const set = allProducts.slice(i, i + 4);
  //   sets.push(set);
  // }

  
  return (
    <>
    <div className='view-section'>
      <div className="view-section-header">
        <h2>RECENTLY VIEWED</h2>
      </div>

      <Carousel >
        {productSets.map((productSet, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              {productSet.map((product) => (
                <div className="view-item" key={product.id}>
                  <img
                    className="d-block w-100"
                    src={product.image}
                    alt={product.name}
                  />
                  {/* <Carousel.Caption>
                    <p>{product.description}</p>
                    <div className="item-prices">
                      <p className="actual-price">{`Rs. ${product.price}.00`}</p>
                      <p className="cut-price">{`Rs. ${product.cutPrice}.00`}</p>
                    </div>
                  </Carousel.Caption> */}

             <p style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px', padding: '0 20px' }}>
              {product.description}
            </p>
            <div className="item-prices">
              <div className="item-price-new">
                <p className="actual-price" style={{ fontSize: '16px' }}>{`Rs. ${product.price}.00`}</p>
                <p className="cut-price" style={{ fontSize: '16px' }}>{`Rs. ${product.cutPrice}.00`}</p>
              </div>
            </div>
                </div>
              ))}
            </div>





    {/* <div className='section-item'> */}
    {/* <Carousel>
        {allProducts.map((product) => (
           <Carousel.Item key={product.id}> 
           {/* <div className="view-item" key={product.id}> */}
            {/* <img src={product.image} alt={product.name} className="d-block w-100"/>

            <Carousel.Caption>
              <p>{product.description}</p>
              <div className="item-prices">
                <p className="actual-price">{`Rs. ${product.price}.00`}</p>
                <p className="cut-price">{`Rs. ${product.cutPrice}.00`}</p>
              </div>
            </Carousel.Caption> */} 

            {/* <p style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px', padding: '0 20px' }}>
              {product.description}
            </p>
            <div className="item-prices">
              <div className="item-price-new">
                <p className="actual-price" style={{ fontSize: '16px' }}>{`Rs. ${product.price}.00`}</p>
                <p className="cut-price" style={{ fontSize: '16px' }}>{`Rs. ${product.cutPrice}.00`}</p>
              </div>
            </div> */}




          {/* </div> */}
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
     
    {/* </div> */}
  </>
    
  );
};

export default RecentlyViewed;
