import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './pages/Error.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import WellnessPage from './pages/WellnessPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: '/Profile',
        element: <ProfilePage />,
      },
      {
        path: '/Wellness/:petId',
        element: <WellnessPage />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);