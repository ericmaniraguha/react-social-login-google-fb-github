import React from 'react';
// import facebook from '../asset/imagesSocial/facebook.jpg';
// import github from '../asset/imagesSocial/github-01.png';
// import google from '../asset/imagesSocial/google.png';

const Login = () => {
  return (
    <div className='login'>
      <h1 className='loginTitle'>Choose a Login Method</h1>
      <div className='wrapper'>
        {/* Leftside of our page */}
        <div className='left'>
          <div className='loginButton google'>
            <img src='' alt='' className='icon' />
            Google
          </div>

          <div className='loginButton facebook'>
            <img src='' alt='' className='icon' />
            Facebook
          </div>

          <div className='loginButton github'>
            <img src='' alt='' className='icon' />
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
