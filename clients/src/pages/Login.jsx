import React from 'react';
import facebook from '../asset/imagesSocial/facebook.png';
import github from '../asset/imagesSocial/github.png';
import googleIcon from '../asset/imagesSocial/google.png';

const Login = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google/', '_self');
  };

  return (
    <div className='login'>
      <h1 className='loginTitle'>Choose a Login Method</h1>
      <div className='wrapper'>
        {/* Leftside of our page */}
        <div className='left'>
          <div className='loginButton google' onClick={google}>
            <img src={googleIcon} alt='' className='icon' />
            Google
          </div>

          <div className='loginButton facebook'>
            <img src={facebook} alt='' className='icon' />
            Facebook
          </div>

          <div className='loginButton github'>
            <img src={github} alt='' className='icon' />
            Github
          </div>
        </div>
        <div className='center'>
          <div className='line' />
          <div className='or'>OR</div>
        </div>

        {/* Right side of my page */}
        <div className='right'>
          <input type='text' placeholder='Username' id='' />
          <input type='text' placeholder='Password' id='' />
          <button type='submit' className='submit'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
