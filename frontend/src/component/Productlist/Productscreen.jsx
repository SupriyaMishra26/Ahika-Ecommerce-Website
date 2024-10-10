import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './product';

const ProductPage = () => {
  const { category, subcategory, label } = useParams();

  // Find the product with the matching category, subcategory, and label
  const product = products.find((p) => {
    return (
      p.category.toLowerCase() === category &&
      p.subcategory.toLowerCase() === subcategory &&
      p.label.toLowerCase() === label
    );
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="breadcrumbs">
        <a href="/">Home</a> / <a href={`/collection/${category.toLowerCase()}`}>{category}</a> / {subcategory}
      </div>
      <div className="product-header">
        <h1>{product.label}</h1>
        <div className="price">{product.price}</div>
      </div>
      <div className="filters">
        <div className="filter">
          <div className="filter-label">Size</div>
          <div className="filter-options">
            {product.sizes.map((size) => (
              <div key={size} className={`filter-option ${product.size === size ? 'selected' : ''}`}>{size}</div>
            ))}
          </div>
        </div>
        <div className="filter">
          <div className="filter-label">Color</div>
          <div className="filter-options">
            {product.colors.map((color) => (
              <div key={color} className={`filter-option ${product.color === color ? 'selected' : ''}`}>{color}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-description">
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

ProductPage.defaultProps = {
  product: {
    category: '',
    subcategory: '',
    label: '',
    price: '',
    sizes: [],
    colors: [],
    description: '',
  },
};

export default ProductPage;