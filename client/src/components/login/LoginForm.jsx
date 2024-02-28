import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = ({onSubmit}) => {
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ email: '', password: '' });
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
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
 };

  return (
    <main className="flex justify-center my-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-xl text-gray-900 font-bold mb-4">Login</h2>
          {data ? (
            <p className="text-center text-green-500 mb-4">
              Success! You may now head <Link to="/Profile" className="text-blue-500">to  your profile.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
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

//   return (
//     <div className="bg-white max-w-md mx-auto mt-8 rounded-lg p-6 relative">
//       <form onSubmit={handleFormSubmit} className="bg-white max-w-md mx-auto mt-8 rounded-lg p-6">
//         <div className="mb-4">
//           <input
//             type="email"
//             name="email" 
//             placeholder="Email"
//             value={formState.email}
//             onChange={handleChange}
//             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formState.password}
//             onChange={handleChange}
//             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-black hover:bg-gray-600 font-bold py-2 px-4 rounded"
//         >
//           Next
//         </button>
//       </form>
//     </div>
//   );
// };

export default LoginForm;
