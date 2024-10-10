import React from 'react';

const YouMayAlsoLikeSection = ({ youMayAlsoLike }) => {
  return (
    <div className='popular'>
    <div className="popular-header">
      <h2>YOU MAY ALSO LIKE</h2>
      </div>
      <div  className="popular-item" >
        {youMayAlsoLike && youMayAlsoLike.map(( product ) => (
         <div className="item" key={product.id} >
         <img
           src={product.imageurl}
           alt={product.description}
          //  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
         />
         <p style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px',padding: '0 20px' }}>{product.description}</p>
         <div className="item-prices" >
   <div className="item-price-new">
         <p className="actual-price"style={{fontSize:"16px"}}>{`Rs. ${product.price}.00`}</p>
         <p className="cut-price" style={{fontSize:"16px"}}>{`Rs. ${product.cutPrice}.00`}</p>
         {/* Add other product details as needed */}
         </div>
         </div>
       </div>

     ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLikeSection;
