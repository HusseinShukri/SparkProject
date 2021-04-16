import React,{useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {useHistory} from 'react-router-dom'

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
    const [first,SetFirst]=useState("")
    const [last,SetLast]=useState("")
    const [email,SetEmail]=useState("")
    const [password,SetPassword]=useState("")
    const history =useHistory();

    async function signup(){
        
        let item ={first,last,email,password}
        console.warn(item)
        let result= await fetch("http://localhost:5555/Account/RegisterStudent",{
        method:'POST',
        body: JSON.stringify(item),
        headers:{
            "Content-Typer":'application/json',
            "Accept":'application/json'
        }
    })
    result =await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/mainpage")
    }
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='first'
            placeholder='Enter your first'
            value={values.first,first}
            onChange={handleChange,(e)=>SetFirst(e.target.value)}
          />
          {errors.first && <p>{errors.first}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='last'
            placeholder='Enter your last'
            value={values.last,last}
            onChange={handleChange,(e)=>SetLast(e.target.value)}
          />
          {errors.last && <p>{errors.last}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email,email}
            onChange={handleChange,(e)=>SetEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password,password}
            onChange={handleChange,(e)=>SetPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button onClick={signup} className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;