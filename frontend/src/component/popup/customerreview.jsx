import React, { useState,useEffect } from 'react';
import { HiOutlineStar, HiStar } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
const ReviewWidget = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

 const [submissionMessage, setSubmissionMessage]=useState('');



  useEffect(() => {
    const button = document.querySelector('.jdgm-write-rev-link');
    if (button) {
      if (isFormVisible) {
        button.textContent = 'Cancel a review';
      } else {
        button.textContent = 'Write a review';
      }
    }
  }, [isFormVisible]);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };
  
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
   

    const requiredFields = ['review_title', 'review_body', 'reviewer_name', 'reviewer_email'];
  const isFormValid = requiredFields.every((field) => {
    const inputElement = document.getElementById(`jdgm_${field}`);
    return inputElement && inputElement.value.trim() !== '';
  });

  if (!isFormValid) {
    // Display an error message or take appropriate action for invalid form
    alert('Please fill in all required fields.');
    return;
  }


  setSubmissionMessage('Review submitted!');
  setTimeout(() => {
    setSubmissionMessage('Thank you! Your review will be published as soon as it is approved by the shop admin.');
  }, 2000);
  setTimeout(() => {
    setSubmissionMessage('');
    toggleFormVisibility();
  }, 5000);


  };
  

  return (
    <div className='review-container'>
      {/* Header */}
      <div className="jdgm-rev-widg__header">
        <h2 className="jdgm-rev-widg__title">Customer Reviews</h2>
        {/* ... Other header elements */}
      </div>

      {/* Summary */}
      <div className="jdgm-row-stars">
        <div className="jdgm-rev-widg__summary">
          <div className="jdgm-rev-widg__summary-inner">
            <div className="jdgm-rev-widg__summary-stars" aria-label="Average rating is 0.00 stars" >
            {[...Array(5)].map((_, i) => (
    <HiOutlineStar key={i} size={24} color="#ffc107" />
  ))}
            </div>
            <div className="jdgm-rev-widg__summary-text">Be the first to write a review</div>
          </div>
         
        </div>
        <div className="jdgm-histogram jdgm-temp-hidden">
          {/* ... Histogram rows */}
          <div className="jdgm-widget-actions-wrapper">
          <button className="jdgm-write-rev-link" onClick={toggleFormVisibility}>
              Write a review
            </button>
          </div>
        </div>
    
      </div>
    
  
      {isFormVisible && (
        <div className="jdgm-form-wrapper">
          <form className="jdgm-form" onSubmit={handleFormSubmit} noValidate>
            {/* ... Form fields and structure */}
            <div className="jdgm-form__fieldset" aria-label="Rating">
              <h4 style={{textAlign:'center'}}> Write a review</h4>
              <label style={{textAlign:'center',fontSize:'17px',marginTop:'20px'}}>Rating</label>
              <div className="jdgm-form__rating" style={{display:'flex', cursor: 'pointer' }}>
  {[1, 2, 3, 4, 5].map((rating) => (
    <div key={rating} onClick={() => handleStarClick(rating)}>
      {rating <= selectedRating ? <HiStar size={24} color="#ffc107" /> : <HiOutlineStar size={24} color="#ffc107"/>}
    </div>
  ))}
  <input name="score" type="hidden" value={selectedRating} />
</div>
            </div>



            <div className="jdgm-form__fieldset">
              <label htmlFor="jdgm_review_title">Review Title</label>
              <input id="jdgm_review_title" name="review_title" type="text" placeholder="Give your review a title" aria-label="Review Title" />
            </div>


            <div className="jdgm-form__fieldset">
              <label htmlFor="jdgm_review_body">Review</label>
              <textarea
                id="jdgm_review_body"
                rows="5"
                name="review_body"
                placeholder="Write your comments here"
                aria-label="Review"
              ></textarea>
            </div>

            {/* ... Other form fields */}
            <div className="jdgm-form__fieldset">
              <label>Picture/Video (optional)</label>
              <div className="jdgm-media-fieldset__container">
            
              <input
            type="file"
            name="media"
            className="jdgm-media-fieldset__input"
            multiple=""
            accept="image/gif,image/jpeg,image/jpg,image/png,image/webp,video/mov,video/mp4,video/x-m4v,video/*"
            aria-label="Choose a review picture/video (optional)"
          />
          <div style={{ display: 'none !important' }} aria-label="Choose a review picture/video (optional)">
          
            </div>
              {/* ... Picture/Video upload field */}
            </div>
            </div>
           

            <div className="jdgm-form__fieldset">
              <input name="yt_url" type="url" placeholder="YouTube URL" aria-label="YouTube URL" />
            </div>
            

            <div className="jdgm-form__fieldset jdgm-form__name-fieldset">
              <label htmlFor="jdgm_review_reviewer_email">Name</label>
              <input
                id="jdgm_review_reviewer_name"
                name="reviewer_name"
                type="name"
                
                placeholder="Enter your name (public)"
                aria-label="name"
                aria-required="true"
               
                required
              />
            </div>
            {/* ... Other form fields */}
            <div className="jdgm-form__fieldset jdgm-form__email-fieldset">
              <label htmlFor="jdgm_review_reviewer_email">Email</label>
              <input
                id="jdgm_review_reviewer_email"
                name="reviewer_email"
                type="email"
                required
                placeholder="Enter your email (private)"
                aria-label="Email"
                aria-required="true"
              />
            </div>

            <div className="jdgm-form__fieldset">
              <p>
                How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting
                your review, you agree to Judge.me’s{' '}
                <a href="https://judge.me/terms"  rel="nofollow noopener">
                  terms and conditions
                </a>{' '}
                and{' '}
                <a href="https://judge.me/privacy"  rel="nofollow noopener">
                  privacy policy
                </a>
                .
              </p>
            </div>

            <div className="jdgm-form__fieldset jdgm-form__fieldset-actions">
            <button type="button" onClick={toggleFormVisibility} className="jdgm-btn jdgm-btn--border jdgm-cancel-rev">
                Cancel review
              </button>
              <input type="submit" className="jdgm-btn jdgm-btn--solid jdgm-submit-rev" value="Submit Review" />
            </div>
          </form>
        </div>
      )}


       
{submissionMessage && (
        <div style={{ textAlign: 'center', marginTop: '20px', color: 'green' }}>
          {submissionMessage}
        </div>
      )}


    </div>
  );
};

export default ReviewWidget;
