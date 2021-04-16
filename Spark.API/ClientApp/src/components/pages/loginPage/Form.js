import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import img2 from '../../../images/img-2.svg'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={img2} alt='spaceship' />
        </div>
          <FormSignup submitForm={submitForm} />
            
      </div>
    </>
  );
};

export default Form;