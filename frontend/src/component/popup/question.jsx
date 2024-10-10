import React, { useState } from 'react';

const Ask = () => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      question: '',
    });
  
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = () => {
      // Validate form fields (you can use a more sophisticated validation library)
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.question.trim()) newErrors.question = 'Question is required';
  
      if (Object.keys(newErrors).length === 0) {
        // Submit the form (you can replace this with your form submission logic)
        setIsSubmitted(true);
      } else {
        setErrors(newErrors);
      }
    };
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    return (
      <div className="category-details3">
        <button onClick={toggleModal} className="ask-question">
          Ask  Question
        </button>
  
        {modal && (
          <div className="modal-container">
            <div className="modal-header">
              <span onClick={toggleModal} className="close">
                ×
              </span>
              <center>
                <h2 id="formtitle">Ask Question</h2>
              </center>
            </div>
            <div className="model-content-box">
              <div className="model-content-box-inner">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name here"
                    onChange={handleChange}
                    value={formData.name}
                    id="name"
                    className="model-in"
                  />
                  <div className="error_cls">{errors.name}</div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Phone number"
                    maxLength="20"
                    onChange={handleChange}
                    value={formData.phone}
                    id="phone"
                    className="model-in"
                  />
                  <div className="error_cls">{errors.phone}</div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your Email-ID"
                    onChange={handleChange}
                    value={formData.email}
                    id="email"
                    className="model-in"
                  />
                  <div className="error_cls">{errors.email}</div>
                </div>
                <div>
                  <textarea
                    placeholder="Ask Question here"
                    onChange={handleChange}
                    value={formData.question}
                    id="question"
                    className="model-in"
                  ></textarea>
                  <div className="error_cls">{errors.question}</div>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="submit-btn"
                >
                  Submit Query
                </button>
              </div>
              <div className="col-md-4 message" id="message2">
                {isSubmitted && <p>Query Submitted</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default Ask;