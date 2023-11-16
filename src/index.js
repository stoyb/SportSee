import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import Error from './pages/error/error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

