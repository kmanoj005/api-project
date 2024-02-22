import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

let route=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/products/:id',
    element: <ProductDetails/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);


