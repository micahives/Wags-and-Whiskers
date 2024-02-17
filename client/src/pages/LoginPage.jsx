import React from 'react';
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';

const LoginPage = () => {
  const handleLoginSubmit = (formData) => {
    console.log('Login form submitted with data:', formData);
  };

  const handleSignUpSubmit = (formData) => {
    console.log('Sign up form submitted with data:', formData);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLoginSubmit} />
      <h2>Sign Up</h2>
      <SignUpForm onSubmit={handleSignUpSubmit} />
    </div>
  );
};

export default LoginPage;
