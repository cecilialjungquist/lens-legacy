import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home/index.jsx';
import Shop from './routes/Shop/index.jsx';
import About from './routes/About/index.jsx';
import Cart from './routes/Cart/index.jsx';
import Contact from './routes/Contact/index.jsx';

import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />,
        // loader: teamLoader,
      },
      {
        path: "about",
        element: <About />,
        // loader: teamLoader,
      },
      {
        path: "cart",
        element: <Cart />,
        // loader: teamLoader,
      },
      {
        path: "contact",
        element: <Contact />,
        // loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
