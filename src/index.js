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
            element:<Welcomepage></Welcomepage>
          },
          {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
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
