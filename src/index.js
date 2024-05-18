import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home';
import ViewProduct from './components/pages/product/ViewProduct';
import CreateProducts from './components/pages/product/CreateProducts';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ListProducts from './components/pages/product/ListProducts';
import EditProducts from './components/pages/product/EditProducts';
import ListCategories from './components/pages/category/ListCategories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'products/',
        element: <ListProducts />,
      },
      {
        path: 'products/create',
        element: <CreateProducts />
      },
      {
        path: 'products/update/:id',
        element: <EditProducts />
      },
      {
        path: 'categories',
        element: <ListCategories />
      }
    ]
  },

  {

  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
    // {/* <App /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
