import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';
import AnimalIcon from '../assets/animalicongreen.svg';

const LoginPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  
  const handleLoginSubmit = (formData) => {
    console.log('Login form submitted with data:', formData);
  };

  const handleSignUpSubmit = (formData) => {
    console.log('Sign up form submitted with data:', formData);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  const handleCloseSignUpForm = () => {
    setShowSignUpForm(false);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold mb-8" style={{ fontFamily: 'Caveat, cursive' }}>Wags and Whiskers</h1>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img src={AnimalIcon} alt="Logo" className="w-1/2 flex-shrink-0 mb-8 md:mb-0"></img>
          <div className="flex flex-col md:ml-8">
            <button
              onClick={handleSignUpClick}
              className="mb-4 px-4 py-2 text-white font-semibold bg-green-700 hover:bg-green-800 rounded-full flex-shrink-0 focus:outline-none"
            >
              Create Account
            </button>
            <p className='mt-4 font-semibold'>Already have an account?</p>
            <button
              onClick={handleLoginClick}
              className="mt-4 px-4 py-2 text-green-600 font-semibold border border-gray-500 rounded-full flex-shrink-0 focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      {showSignUpForm && (
        <div className="fixed top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-lg z-50">
          <SignUpForm onSubmit={handleSignUpSubmit} />
          <button onClick={handleCloseSignUpForm} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      {showLoginForm && (
        <div className="fixed top-1/4 left-1/4 w-1/2 h-1/2 shadow-lg bg-white rounded-lg z-50">
          <LoginForm onSubmit={handleLoginSubmit} />
          <button onClick={handleCloseLoginForm} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;