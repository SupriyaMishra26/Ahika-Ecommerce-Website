// recentlyviewcontext.js

import React, { createContext, useContext, useState ,useCallback} from 'react';

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const addToRecentlyViewed = useCallback((product) => {
    setRecentlyViewed((prevRecentlyViewed) => {
      // Check if the product is already in the list
      const index = prevRecentlyViewed.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const updatedRecentlyViewed = [
          product,
          ...prevRecentlyViewed.slice(0, index),
          ...prevRecentlyViewed.slice(index + 1),
        ];
        return updatedRecentlyViewed;
      }


    // If the product is not in the list, add it to the front
    const updatedRecentlyViewed = [product, ...prevRecentlyViewed];

    // Limit the list to a certain number of items (e.g., 5)
    const maxRecentItems = 5;
    return updatedRecentlyViewed.slice(0, maxRecentItems);
  });
}, []);

  const contextValue = {
    recentlyViewed,
    addToRecentlyViewed,
  };

  return (
    <RecentlyViewedContext.Provider value={contextValue}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);
