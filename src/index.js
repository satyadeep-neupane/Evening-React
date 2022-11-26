import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import router from './router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
  
);
