import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaPhone, FaEnvelope ,FaWhatsapp,FaHeart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import Ask from '../../popup/question';
import ReviewWidget from '../../popup/customerreview';
import YouMayAlsoLikeSection from '../YoumayLike/maylikeitem';
import RecentlyViewed from '../../Recentlyview/RecentlyViewed';
import ProductDetails from '../../Recentlyview/productdetails';
import { Cart } from '../data';
import { productData } from '../data';
import { categories } from '../cardslider/data2';


const SizePopup = ({ onClose }) => (
  <div className="size-popup-container">
    <button className="close-pop" onClick={onClose}>
  X
</button>
    <div className="size-popup">
      <div className="header-wrap">
        <div className="header-title">Size Guide</div>
      </div>
      <div className="size-chart-img">
        <img src="https://cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/Cotton_900x.jpeg" alt="size" />
      </div>
    </div>
  </div>
);


const CategoryDetails3 = ({ section }) => {
  const { id } = useParams();


  const selectedItem =
  section === 'bestseller'
    ? categories.find((product) => product.id === parseInt(id, 10))
    : Cart.find((product) => product.id === parseInt(id, 10));

    const selectedProduct =
  Cart.find((product) => product.id === parseInt(id, 10)) ||
  categories.find((product) => product.id === parseInt(id, 10));
 // const selectedItem = Cart.find(item => item.id === parseInt(id, 10));

  const [quantity, setQuantity] = useState(1);
  const [zipcode, setZipcode] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSpecifications, setIsOpenSpecifications] = useState(false);
  
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  

  const [selectedSize, setSelectedSize] = useState(() => getFirstAvailableSize());
  function getFirstAvailableSize() {
    const sizes = selectedItem?.size || [];
    const disabledSizes = selectedItem?.disabledSizes || [];
  
    for (const size of sizes) {
      if (size && !disabledSizes.includes(size) && !size.includes('overlined')) {
        return size;
      }
    }
  
    return sizes[0] || "DefaultSize";
  }


  
  
 

  
  

  const handleWhatsappShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this product: ${description}`);
    window.open(`https://api.whatsapp.com/send?text=${text}&url=${url}`, '_blank');
  };

  const handleSizeChartClick = () => {
    setIsSizeChartOpen(true);
  };

  const handleSizeChartClose = () => {
    setIsSizeChartOpen(false);
  };

  
  
  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { images, description, colors,  title, price, cutPrice , material,addDesc ,materials,stylenote,sizefit,specifications} = selectedItem;
  
  
  const handleHeartClick = () => {
    // Toggle between filled and unfilled heart
    setIsHeartFilled(prev => !prev);

    // Show popup overlay only when the heart icon is filled
    if (!isHeartFilled) {
      setIsPopupVisible(true);
    } else {
      setIsPopupVisible(false);
    }
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };
 
  const firstImage = selectedItem.images[0].image;
  const imageDescription = selectedItem.description;
  

 


  
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };



  
  

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleCheckAvailability = () => {
    // Check if the zipcode is exactly six digits
    const isZipcodeValid = /^\d{6}$/.test(zipcode);

    if (!isZipcodeValid) {
      setAvailabilityMessage('This product is unavailable for the entered zipcode.');
      setTimeout(() => {
        setAvailabilityMessage('');
      }, 3000); // Hide the message after 3 seconds
      return;
    }
   // Calculate the delivery date (5 days from the current date)
   const currentDate = new Date();
   const deliveryDate = new Date(currentDate);
   deliveryDate.setDate(currentDate.getDate() + 5);

   // Format the delivery date
   const formattedDeliveryDate = `${deliveryDate.getDate()} ${
     deliveryDate.toLocaleString('default', { month: 'short' })
   }, ${deliveryDate.getFullYear()}`;

   // Set the availability message
   setAvailabilityMessage(
     `This product is available at your location. Get it by ${formattedDeliveryDate}`
   );

   // Hide the message after 3 seconds
   setTimeout(() => {
     setAvailabilityMessage('');
   }, 3000);
 };

 
// Set the selected size as the first available size


 

return (
  <>
 <div className="category-details-page">
      <div className="image-column">
       <div className="breadcrumbs">
        <Link to="/">Home/</Link>
        
        <span>{description}</span>
       
      </div>
      
        <div className="image-container">
        {images.map(({ image }, index) => (
  <img key={index} src={image} alt={`Product ${index + 1}`} className="small-image"/>
))}
        </div>
       </div>


       <div className="details-container">
        <div className="description-container">
          {/* Assuming you don't have a 'title' property in your Cart items */}
         {description}
          
          <span className="heart-icon" onClick={handleHeartClick}>
        {isHeartFilled ? <FaHeart /> : <CiHeart />}
      </span>

      {/* Popup overlay */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
          <div className="popup-container">
          <button className="close-button" onClick={handlePopupClose}>X</button>
            {/* Display the first image and its description in the popup */}
            <img src={firstImage} alt="" className="popup-image" />
            
            <div className="desc">
              <p>{imageDescription}- has been added successfully </p>
          
          
            </div>
          </div>
        </div>
        </div>
      )}
            </div>
          <p style={{ fontSize:"13px"}}>{title}</p>
         


          <div className="price-container">
          <div className="price-details">
            <p className="cut-price">Rs. {cutPrice}.00</p>
            <p className="actual-price">RS. {price}.00</p>
          </div>
          </div>

          <p style={{ fontSize:"13px"}}>Tax included. Shipping calculated at checkout.</p>

          <div className="color-container">
  <p>Colour</p>
  <div className="selected-color" style={{ backgroundColor: colors && colors.length > 0 ? colors[0] : '', width: '60px', height: 'auto' }}>
    {/* Display the first image */}
    <img
      src={images.length > 0 ? images[0].image : ''} alt="imagelength"
     
      className="tiny-color-image"
    />
  </div>
</div>


<div className="size-container">
  <p>Size</p>
  <div className="size-text-and-link" onClick={handleSizeChartClick}>
    View Size Guide
  </div>
  <ul>
  {selectedItem?.size?.map((size, index) => (
      <li
        key={index}
        style={{
          backgroundColor: size,
          border: size === selectedSize ? "2px solid black" : "none",
          textDecoration: selectedItem?.disabledSizes?.includes(size) ? "line-through" : "none",
          opacity: selectedItem?.disabledSizes?.includes(size) ? 0.5 : 1,
          pointerEvents: selectedItem?.disabledSizes?.includes(size) ? "none" : "all",
        }}
        className={selectedItem?.disabledSizes?.includes(size) ? "disabled" : "size"}
        onClick={() => selectedItem?.size && !selectedItem?.disabledSizes?.includes(size) && setSelectedSize(size)}
      >
        {size}
      </li>
    ))}
  </ul>
</div>
            {isSizeChartOpen && <SizePopup onClose={handleSizeChartClose} />}
          
          
            <div className="material-container">
              <p>Material</p>
              <div className="material-circle">
                <span className="material-text">{material}</span>
              </div>
            </div>
                    

         
          <div className="quantity-container">
            <p>Quantity</p>
           
           
            < div className="quantity-controls">
            <div className="quantity-box">
              <button onClick={decreaseQuantity}>-</button>
              </div>
              <div className="quantity-box">
              <span>{quantity}</span>
              </div>
              <div className="quantity-box">
              <button onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <span className="whatsapp-icon" onClick={handleWhatsappShare}>
              Share 
              
              <FaWhatsapp style={{ color: 'green' }} />
             
            </span>
          
          </div>
         
          <button className="add-to-cart-btn">ADD TO CART</button>
          <button className="buy-now-btn">BUY NOW</button>

          
          <div className="zipcode-container">
  <label htmlFor="zipcode" className="check-delivery">Check Delivery</label>
  <div className="zipcode-input-container">
    <input
      className="zip"
      type="text"
      id="zipcode"
      placeholder="Enter your zip code"
      value={zipcode}
      onChange={handleZipcodeChange}
    />
    <button onClick={handleCheckAvailability} className="check-availability">Check Availability</button>
  </div>
  <p>{availabilityMessage}</p>
</div>


<Ask/>



          
         

        <div className='paragraph-container'>  <p>NO RETURN OFFER - Get Extra 5% off NORETURN Once you apply this coupon, items will be non-returnable. You can still exchange items.</p></div>
        
          <div className='shipping-container'>
      <div className="shipping-icon">
        <ul className="shipping-icon-list">
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/New_Project.png"  alt="free"/>
            <span>Free Shipping</span>
          </li>
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/Fram_3.png"  alt="cod"/>
            <span>COD</span>
          </li>
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/Frame_4.png"  alt="return"/>
            <span>Easy Returns</span>
          </li>
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/onetime_delivery.png" alt="dispatch" />
            <span>Dispatches within 24 hr</span>
          </li>
        </ul>
      </div>
    </div>


   
     

          <div className='dropdown-container'>

            <div className="category-dropdown">
              <details>
                <summary> DESCRIPTION</summary>
                
                <h6>{description}</h6>
                <p>{addDesc}</p>
              </details>
            </div>
            <hr/>

       
            <div className="category-dropdown">
              <details>
                <summary>STYLE NOTE</summary>
                
                <h6>Style Note </h6>
                <h6 > Complete The Look</h6>        
                <p>{stylenote}</p>
              </details>
            </div>
            <hr/>




       

          <div className="category-dropdown">
  <details>
    <summary>SIZE & FIT</summary>
    <h6>Size & Fit </h6>
              
    <p>{sizefit}</p>
  </details>
</div>
<hr/>




          <div className="category-dropdown">
      
      <details open={isOpen}>
        <summary onClick={() => setIsOpen(!isOpen)}>MATERIALS</summary>
          <div className="category-dropdown-content">
           <h6>Materials & Care</h6>
            <p>
              {materials.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </details>
        </div>
        <hr />

        <div className="category-dropdown">
      
      <details open={isOpenSpecifications}>
        <summary onClick={() => setIsOpenSpecifications(!isOpen)}>SPECIFICATION</summary>
          <div className="category-dropdown-content">
           <h6>Specification</h6>
            <p>
              {specifications.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
                
              ))}

            </p>
            <h6>Product Code: VCK9632</h6>
          </div>
        </details>
        </div>
        <hr />

        </div>
       

        <div className="help-section">
            <p>Need Help?<br/>
            Monday - Saturday, 9:00 AM to 6:00 PM (IST)</p>
           <p>
              <span className="phone-icon">
                <FaPhone />
              </span>
              +91-9265844264 <br/>
           
            
              <span className="email-icon">
                <FaEnvelope />

              </span>
                 ahika@vivaanta.com
            </p>
          </div>
        

         



        </div>

      
        </div>
        
        <ReviewWidget/>
        {selectedItem && (
          <YouMayAlsoLikeSection youMayAlsoLike={selectedItem.youMayAlsoLike} />
        
        )}
       
      
        {/* <RecentlyViewed allProducts={[...categories, ...Cart]} defaultData={productData} maxRecentItems={5} /> defaultData={productData}*/}
        <ProductDetails data={selectedProduct} productId={parseInt(id, 10)} />
      <RecentlyViewed   />   
      {/* maxRecentItems={10}  */}
      
      
       
    </>
  )
}

export default CategoryDetails3
