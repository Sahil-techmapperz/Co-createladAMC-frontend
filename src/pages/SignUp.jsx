import React from 'react';
import '../CSS/SignUp.css';
import Signup1 from '../assets/signup.png';

import Logo1 from '../assets/Logo1.png';

const SignUp = () => {
  return (
    <div className='signup_page'>
      <img src={Signup1} alt="SignUp" />
      <form className='form-container'>
        <img  src={Logo1} />
        <p className='sign_as_mentor'>Sign In As Mentor</p>
        <p className='mb-[1rem] max-sm:[300px]'>Enter your email and password to Sign In</p>

        <div className="form-group">
          <input type="email" placeholder='Email' id="email" name="email" required />
        </div>

        <div className="form-group ">
          <input type="password" placeholder='Current Password' id="password" name="password" required />
        </div>

        <div className="form-group password-container">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <p className='mt-[4px]'>Remember Me</p>
        </div>

        <div className="form-group">
          <button className='submit' type="submit">SIGN IN</button>
        </div>

        <p> Don't have an account?<b>Sign Up</b> </p>
      </form>
    </div>
  );
};

export default SignUp;
