import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_PROFILE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SignUpForm = ({ onSubmit }) => {
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
  const [formState, setFormState] = useState({ email: '', password: '', username: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });
      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
      username: '',
    });
  };

  return (
    <main className="flex justify-center my-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-xl text-gray-900 font-bold mb-4">Create Account</h2>
          {data ? (
            <p className="text-center text-green-500 mb-4">
              Success! You may now head <Link to="/Profile" className="text-blue-500">to your profile</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="w-full bg-black hover:bg-gray-600 font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
          {error && (
            <div className="my-3 p-3 bg-red-500 text-white text-center">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SignUpForm;