import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   createHashRouter,
//   RouterProvider
// } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <RouterProvider router={router} />
//     </HelmetProvider>
//   </React.StrictMode>
// );