import React from 'react';
import facebookIcon from '../asset/imagesSocial/facebook.png';
import githubIcon from '../asset/imagesSocial/github.png';
import googleIcon from '../asset/imagesSocial/google.png';

const Login = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google/', '_self');
  };

  const github = () => {
    window.open('http://localhost:5000/auth/github/', '_self');
  };

  const facebook = () => {
    window.open('http://localhost:5000/auth/facebook/', '_self');
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

          <div className='loginButton facebook' onClick={facebook}>
            <img src={facebookIcon} alt='' className='icon' />
            Facebook
          </div>

          <div className='loginButton github' onClick={github}>
            <img src={githubIcon} alt='' className='icon' />
            Github
          </div>
        </div>
        <div className='center'>
          <div classNamepassport-facebook='line' />
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
