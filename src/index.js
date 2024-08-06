import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './features/user/Login';
import Home from './features/common/Home';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import { store } from './app/store';
import Dashboard from './features/dashboard/Dashboard';
import Welcomepage from './features/common/Welcomepage';
import AddProduct from './features/dashboard/AddProduct';
import Products from './features/common/Products';
import ProductDetails from './features/common/ProductDetails';
import Cart from './features/common/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'',
        element:<Home></Home>,
        children:[
          {
            path:'',
            element:<Products></Products>
          },
          {
            path:'/productDetails/:id',
            element:<ProductDetails></ProductDetails>
          },
          {
            path:'/cart',
            element:<Cart></Cart>
          },
          {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
              {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
              }
            ]
          },
          {
            path:'/login',
            element:<Login></Login>
          }
        ]
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
);
reportWebVitals();
