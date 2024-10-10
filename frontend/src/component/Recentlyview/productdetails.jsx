import React, { useEffect ,useMemo} from 'react';
import { useRecentlyViewed } from '../../constants/recentlyviewcontext';

const ProductDetails = ({ data, productId }) => {
  const { addToRecentlyViewed } = useRecentlyViewed();

 

   useEffect(() => {
    const product = getProductById(data, productId);

    if (product) {
      // Add the viewed product to recently viewed
      addToRecentlyViewed(product);
    }
  }, [addToRecentlyViewed, data, productId]);


  const getProductById = (data, productId) => {
    if (Array.isArray(data)) {
      return data.find((item) => item.id === productId);
    } else if (typeof data === 'object' && data !== null) {
      // Handle the case where data is an object (e.g., selectedProduct)
      // You might need to adjust this based on your actual data structure
      return data;
    } else {
      // Handle other cases (optional)
      return null;
    }
  };

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <>
    
    </>
  );
};

export default ProductDetails;




